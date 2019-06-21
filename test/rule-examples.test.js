const codeBlocks = require('gfm-code-blocks')
const describeRule = require('./utils/describe-rule')
/**
 * See
 * - https://html-validate.org/
 * - https://html-validate.org/rules/
 */
const { HtmlValidate } = require("html-validate");
const { getFormatter } = require("html-validate/build/cli/formatter");
const stylish = getFormatter("stylish");
const htmlValidate = new HtmlValidate({
  extends: ["htmlvalidate:recommended"],
});

describeRule('examples', (ruleData) => {
  const { frontmatter, body } = ruleData
  const { id, name } = frontmatter
  const codeSnippets = codeBlocks(body).map(block => block.code)
  test.each(codeSnippets)('is valid HTML code - `%s`', snippet => {
    const report = htmlValidate.validateString(snippet);
    if (!report.valid) {
      console.log(`Rule Name: ${name} \n`);
      console.log(`Rule Id: ${id} \n`);
      // console.log(JSON.stringify(report.results, undefined, 2));

      report.results.forEach(({ source, messages }) => {
        console.log(`Source: \n`, source);
        console.table(messages);
      });


    }
    expect(report.valid).toBe(true);
  })
})
