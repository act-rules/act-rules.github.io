/**
 * Get relative (suffix) from url
 *
 * @param {String} url url
 */
const getTestcaseRelativeUrl = url => {
	const index = url.indexOf(`/testcases/`)
	return url.substring(index)
}

module.exports = getTestcaseRelativeUrl
