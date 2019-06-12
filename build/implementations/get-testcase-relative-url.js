const {
	www: { url: siteUrl },
} = require('./../../package.json')

/**
 * Get relative (suffix) from url
 *
 * @param {String} url url
 */
const getTestcaseRelativeUrl = url => {
	const urlPrefix = `${siteUrl}/testcases/`
	return url.substr(url.indexOf(urlPrefix))
}

module.exports = getTestcaseRelativeUrl
