const fs = require('fs')
const globby = require('globby')
const axios = require('axios')
const jsonld = require('jsonld')
const { exec } = require('child_process')
const frameConfig = require('./json-ld-frame-config')

const getFramedReport = async options => {
	const { type } = options

	if (![`NPM`, `JSON`].includes(type)) {
		throw new Error('Provided type ${type} for report is not val`')
	}

	if (type === `JSON`) {
		const { path: url } = options
		const { data } = await axios.get(url)
		return await jsonld.frame(data, frameConfig)
	}

	if (type === `NPM`) {
		const { exec: command, path } = options

		// `npm i module`
		await executeCommand(command)

		const reports = globby.sync([`./node_modules/${path}`]).map(reportPath => {
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
}

module.exports = getFramedReport

/**
 * Execute a given command
 *
 * @param {String} command command to execute
 */
async function executeCommand(command) {
	return new Promise((resolve, reject) =>
		exec(command, (err, result) => {
			if (err) {
				reject(err)
			}
			resolve(result)
		})
	)
}
