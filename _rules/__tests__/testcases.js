const gfmCodeBlocks = require('gfm-code-blocks')
const htmlHint = require("htmlhint");
const describeRule = require('../../test-utils/describe-rule')

const htmlHintRules = {
  // 'ON'
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "attr-no-duplication": true,
  "tag-pair": true,
  "empty-tag-not-self-closed": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "title-require": true,
  "alt-require": true,
  "attr-unsafe-chars": true,
  // 'OFF' 
  "doctype-first": false,
  "doctype-html5": false,
  "attr-value-not-empty": false,
  "style-disabled": false,
  "inline-style-disabled": false,
  "inline-script-disabled": false,
  "id-class-ad-disabled": false,
  "href-abs-or-rel": false,
  "space-tab-mixed-disabled": false,
  "head-script-disabled": false,
  "id-class-value": false,
}

describeRule('testcases', (ruleData) => {
  const { frontmatter, body } = ruleData
  const { id, name, htmlHintIgnore = [] } = frontmatter

  const codeBlocks = gfmCodeBlocks(body)

  const codeSnippets = codeBlocks
    .filter(({ block }) => (/html/gm.test(block.substring(0, 25))))
    .map(({ code }) => code)

  test.each(codeSnippets)('is valid HTML code - `%s`', snippet => {

    const rules = { ...htmlHintRules };
    /**
     * Ignore `rules` specified in frontmatter of certain rules (if any)
     */
    htmlHintIgnore.forEach(ignoreRule => rules[ignoreRule] = false);

    const errors = htmlHint.default.verify(snippet, rules);

    if (errors.length) {
      console.log(`Rule Name: ${name} \n`);
      console.log(`Rule Id: ${id} \n`);
      console.table(errors)
    }

    expect(errors.length).toEqual(0)
  })
})