const getMarkdownData = require('../utils/get-markdown-data')
const pagesData = getMarkdownData(`./pages`, [
	`!**/**/license.md`, // Note: there is a lot of markdown(esque) verbiage in W3C license
])

/**
 * describe page helper
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describle` block, which executes per page
 */
const describePage = (groupName, runTests) => {
	/**
	 * Create arbitrary meta data that can be used in various tests
	 */
	const metaData = {
		glossaryKeys: getMarkdownData(`./pages/glossary`).map(({ frontmatter }) => frontmatter.key),
	}
	pagesData.forEach(pageData => {
		const { filename } = pageData
		describe(filename, () => {
			describe(groupName, () => {
				runTests(pageData, metaData)
			})
		})
	})
}

module.exports = describePage
