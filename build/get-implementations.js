const path = require('path')
const axios = require('axios')
const jsonld = require('jsonld')
const pkg = require('./../package.json')
const jsonLdFrameConfig = require('./implementation-json-ld-frame')
const createFile = require('./create-file')
const outputFile = path.join(__dirname, '..', '_data', 'implementations.json')

/**
 * Transform data to JSONLD frame
 * @param {Object} data data
 * @param {String} reportUrl url
 */
const getFramedResult = async (data, url) => {
  return new Promise((resolve, reject) => {
    jsonld.frame(data, jsonLdFrameConfig, (err, result) => {
      if (err) {
        reject(err)
      }
      result['reportUrl'] = url
      resolve(result)
    })
  })
}

/**
 * Given report data
 * 
 * @param {String} url resource endpoint for the report
 */
const getReportData = (url) => {
  return axios.get(url)
    .then(async (response) => {
      const { data } = response
      return await getFramedResult(data, url)
    })
}


/**
 * Tabulate implementation data
 * @param {Array<Object>} data 
 */
const tabulateImplementationData = (data) => {
  return data.map((implementation) => {
    const graph = implementation['@graph']
    if (!graph || !graph.length) {
      return
    }
    const assertedBy = graph[0]['assertedBy']
    return {
      vendorName: assertedBy['vendor']['foaf:name'],
      vendorTool: assertedBy['vendorTool'],
      vendorToolVersion: assertedBy['@id'].split('/').reverse()[0],
      reportUrl: implementation.reportUrl
    }
  })
}

(async () => {
  const implementations = pkg.config.implementations;
  if (!implementations || Object.keys(implementations).length <= 0) {
    throw new Error('No implementations are specified in config.')
  }

  const reports = Object.values(implementations)
  const promises = reports.map(getReportData)
  const result = await Promise.all(promises)
  const tabulatedData = tabulateImplementationData(result)
  createFile(outputFile, JSON.stringify(tabulatedData, undefined, 2))
  console.log('DONE!!! Generated Implementations Data.')
})()