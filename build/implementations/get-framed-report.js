const fs = require('fs')
const globby = require('globby')
const axios = require('axios')
const jsonld = require('jsonld')
const isUrl = require('is-url')
const frameConfig = require('./json-ld-frame-config')

const getFramedReport = async path => {
	if (isUrl(path)) {
		const { data } = await axios.get(path)
		return await jsonld.frame(data, frameConfig)
	}

	const reports = globby.sync([path])
		.map(reportPath => {
			const fileContent = fs.readFileSync(reportPath, { encoding: 'utf-8' })
			return JSON.parse(fileContent)
		})

	const result = []

	for (let report of reports) {
		const framedReport = await jsonld.frame(report, frameConfig)
		result.push(framedReport)
	}

	return result
}

module.exports = getFramedReport