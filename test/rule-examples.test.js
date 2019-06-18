const codeBlocks = require('gfm-code-blocks')
/**
 * See 
 * - https://html-validate.org/
 * - https://html-validate.org/rules/
 */
const { HtmlValidate } = require("html-validate");
const describeRule = require('./utils/describe-rule')

const htmlValidate = new HtmlValidate({
  extends: ["htmlvalidate:recommended"],
});

describeRule('examples', (ruleData) => {
  const { body } = ruleData
  const codeSnippets = codeBlocks(body)
  test.each(codeSnippets)('has valid HTML code snippet = `%j`',
    snippet => {
      const { code } = snippet;
      const { valid } = htmlValidate.validateString(code);
      expect(valid).toBe(true)
    })
})
