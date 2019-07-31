const codeBlocks = require('gfm-code-blocks')
const validator = require('html-validator')
const prettyJson = require('prettyjson')
const describeRule = require('../../test-utils/describe-rule')

describeRule('testcases', ruleData => {
  const { frontmatter, body } = ruleData
  const { id, name } = frontmatter

  /**
   * get test case code snippets of the rule
   */
  const codeSnippets = codeBlocks(body).map(({ code }) => code)

  /**
   * Check if testcases are valid
   * - using `html-validator`
   * - check fragment `isFragment = true`
   */
  test.each(codeSnippets)('is valid testcase: `%p`', async (snippet) => {
    const options = {
      data: snippet,
      isFragment: true,
      format: 'json'
    }
    const result = await validator(options)

    expect(result).toBeObject()
    expect(result).toContainKey('messages')

    const { messages } = result
    const errorMessages = messages.filter(({ type }) => type === `error`)

    if (errorMessages.length) {
      const output = {
        "Rule Id": id,
        "Rule Name": name,
        "Snippet": snippet,
        "Errors": errorMessages.map(({message}) => message),
      };
      console.log(prettyJson.render(output));
    }
    expect(errorMessages.length).toBe(0)
  })
})