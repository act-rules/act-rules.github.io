const gfmCodeBlocks = require('gfm-code-blocks')
const HTMLHint = require("htmlhint");
const describeRule = require('./utils/describe-rule')
const htmlHintRules = {
  "tagname-lowercase": true,
  "attr-lowercase": false,
  "attr-value-double-quotes": true,
  "doctype-first": false,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": false,
  "attr-no-duplication": true,
  "title-require": false
}

describeRule('examples', (ruleData) => {
  const { frontmatter, body } = ruleData
  const { id, name } = frontmatter

  const codeBlocks = gfmCodeBlocks(body)

  const codeSnippets = codeBlocks
    .filter(({ block }) => {
      /**
       * ignore `svg` document example
       */
      if (/```svg/gm.test(block.substring(0, 20))) {
        return false;
      }

      /**
       * ignore `xml` document example
       */
      if (/```xml/gm.test(block.substring(0, 20))) {
        return false;
      }

       /**
       * ignore `js` document example
       */
      if (/```js/gm.test(block.substring(0, 20))) {
        return false;
      }

      /**
       * ignore examples marked with `ignoreTest`
       */
      if(/ignoreTest/gm.test(block.substring(0, 20))) {
        return false;
      }

      return true;
    })
    .map(({ code }) => code)

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