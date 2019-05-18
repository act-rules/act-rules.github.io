const describeRule = require('./utils/describe-rule')
const getAllHeadingsFromMarkdownBody = require('./utils/get-all-headings-from-markdown-body')
const getHeadingOfDepth = require('./utils/get-heading-of-depth')

describeRule('headings', (ruleData) => {
  const { body } = ruleData
  const headings = getAllHeadingsFromMarkdownBody(body)

  const level3Headings = getHeadingOfDepth(headings, 3)

  /**
   * Check for `required` `h2` headings
   */
  const requiredH2 = [
    `Applicability`,
    `Assumptions`,
    `Accessibility Support`,
    `Background`,
    `Test Cases`,
  ]
  const h2Headings = getHeadingOfDepth(headings, 2)
  test.each(requiredH2)('has required `h2` - `%s`', heading => {
    expect(h2Headings).toContain(heading);
  })

  /**
  * Check for `required` `h3` headings
  */
  const requiredH3 = [
    `Passed`,
    `Failed`,
    `Inapplicable`
  ]
  const h3Headings = getHeadingOfDepth(headings, 3)
  test.each(requiredH3)('has required `h2` - `%s`', heading => {
    expect(h3Headings).toContain(heading);
  })
})