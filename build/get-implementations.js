const path = require('path')
const axios = require('axios')
const jsonld = require('jsonld')
const pkg = require('./../package.json')
const jsonLdFrameConfig = require('./implementation-json-ld-frame')
const createFile = require('./create-file')
const outputFile = path.join(__dirname, '..', '_data', 'implementations.json')

/**
 * Given report data
 * 
 * @param {String} url resource endpoint for the report
 */
const getReportData = (url) => {
  return axios.get(url)
    .then(async ({ data, request }) =>
      await getFramedResult(data, request.responseURL))
}

/**
 * Transform data to JSONLD frame
 * @param {Object} data data
 * @param {String} reportUrl url
 */
const getFramedResult = async (data, reportUrl) => {
  return new Promise((resolve, reject) => {
    jsonld.frame(data, jsonLdFrameConfig, (err, result) => {
      if (err) {
        reject(err)
      }
      result.reportUrl = reportUrl
      resolve(result)
    })
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
  createFile(outputFile, JSON.stringify(result, undefined, 2))
  console.log('DONE!!! Generated Implementations Data.')
})()