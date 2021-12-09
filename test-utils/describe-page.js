const getMarkdownData = require('../utils/get-markdown-data')
const getIds = require('../utils/get-ids')
const pagesData = getMarkdownData(`./pages`, [
	`!**/**/license.md`, // Note: there is a lot of markdown(esque) verbiage in W3C license
])

/**
 * describe page helper
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describle` block, which executes per page
 */
const describePage = (groupName, runTests) => {
	const glossaryData = getMarkdownData(`./pages/glossary`)
	// The keys of all glossary items
	const glossaryKeys = glossaryData.map(({ frontmatter }) => frontmatter.key)
	// The `id` of all elements used in glossary items
	const glossaryIds = glossaryData.flatMap(({ markdownAST }) => getIds(markdownAST))

	/**
	 * Create arbitrary meta data that can be used in various tests
	 */
	const metaData = { glossaryIds, glossaryKeys }

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
