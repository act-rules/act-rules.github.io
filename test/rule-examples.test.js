const codeBlocks = require('gfm-code-blocks')
const HTMLHint = require("htmlhint");
const describeRule = require('./utils/describe-rule')
const htmlHintRules = {
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "doctype-first": false,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": false,
  "attr-no-duplication": true,
  "title-require": true
}

describeRule('examples', (ruleData) => {
  const { frontmatter, body } = ruleData
  const { id, name } = frontmatter
  const codeSnippets = codeBlocks(body).map(block => block.code)

  test.each(codeSnippets)('is valid HTML code - `%s`', snippet => {
    const errors = HTMLHint.default.verify(snippet, htmlHintRules);

    if (errors.length) {
      console.log(`Rule Name: ${name} \n`);
      console.log(`Rule Id: ${id} \n`);
      console.table(errors)
    }

    expect(errors.length).toEqual(0)
  })
})