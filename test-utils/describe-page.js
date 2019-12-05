const getMarkdownData = require('../utils/get-markdown-data')
const pagesData = getMarkdownData(`./pages`)

/**
 * describe page helper
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describle` block, which executes per page
 */
const describePage = (groupName, runTests) => {
	pagesData.forEach(pageData => {
		const { filename } = pageData
		describe(filename, () => {
			describe(groupName, () => {
				runTests(pageData)
			})
		})
	})
}

module.exports = describePage
