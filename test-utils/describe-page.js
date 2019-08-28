const getPagesMarkdownData = require('../utils/get-pages-markdown-data')

/**
 * describe page helper
 * @param {String} groupName name of the `describe` block
 * @param {Function} runTests function callback of `describle` block, which executes per page
 */
const describePage = (groupName, runTests) => {
  const pages = getPagesMarkdownData()

  pages.forEach(pageData => {
    const { filename } = pageData
    describe(filename, () => {
      describe(groupName, () => {
        runTests(pageData)
      })
    })
  })
}

module.exports = describePage