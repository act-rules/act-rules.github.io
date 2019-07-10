const describeRule = require('../test-utils/describe-rule')
const getAllHeadingsFromMarkdownBody = require('../test-utils/get-all-headings-from-markdown-body')
const getHeadingOfDepth = require('../test-utils/get-heading-of-depth')

describeRule('headings', (ruleData) => {
  const { body } = ruleData
  const headings = getAllHeadingsFromMarkdownBody(body)

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