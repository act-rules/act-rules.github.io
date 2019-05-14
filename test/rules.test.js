const fs = require('fs')
const path = require('path')
const globby = require('globby')
const fastmatter = require('fastmatter')
const marked = require('marked')

const rulesPaths = globby.sync([`./_rules/*.md`])
const rulesData = rulesPaths.map(rulePath => {
  const filename = path.parse(rulePath).base
  const fileContents = fs.readFileSync(rulePath, { encoding: 'utf-8' })
  const { attributes, body } = fastmatter(fileContents)
  return [
    filename, // used for dynamically creating title of testcases
    { attributes, body }
  ]
})

/**
 * Get headings  from a given body of text
 * @method getAllHeadingsFromMarkdownBody
 * @param {String} body text content of markdown file
 * @returns {Array<Object>} list of headings
 */
const getAllHeadingsFromMarkdownBody = (body) => {
  const lexer = new marked.Lexer({})
  const tokens = lexer.lex(body)
  return tokens.reduce((out, token, index) => {
    const { type } = token
    if (type === `heading`) {
      out.push({
        ...token,
        number: index // populate with line number, to check for ordering
      })
    }
    return out
  }, [])
}

/**
 * Get `text` of headings of given depth
 * @param {Array<Object>} headings list of headings
 * @param {Number} headingDepth given depth of heading
 * @returns {Array<String>} al headings matching given depth
 */
const getHeadingOfDepth = (headings, headingDepth) => {
  return headings
    .filter(({ depth }) => depth === headingDepth)
    .map(({ text }) => text)
}

test(`should contain rules`, () => {
  expect(rulesPaths).toBeDefined()
  expect(rulesPaths.length).toBeGreaterThan(0);
})

describe(`validate rules frontmatter > attributes`, () => {
  test.each(rulesData)(`rule %p`,
    (name, { attributes: frontmatter }) => {
      const { id, rule_type } = frontmatter

      /**
       * Check if all `mandatory` keys exist
       */
      expect(frontmatter).toHaveProperty('id');
      expect(frontmatter).toHaveProperty('name');
      expect(frontmatter).toHaveProperty('rule_type');
      expect(frontmatter).toHaveProperty('description');
      expect(frontmatter).toHaveProperty('accessibility_requirements');
      expect(frontmatter).toHaveProperty('authors');

      /**
       * Check if file name has `id`
       */
      const hasIdInName = name.includes(id)
      expect(hasIdInName).toBe(true)

      /**
       * Check if `input_rules` attribute exists for `composite` rules
       */
      if (rule_type.toLowerCase() === `composite`) {
        expect(frontmatter).toHaveProperty('input_rules');
        expect(frontmatter).not.toHaveProperty('input_aspects');
      }

      /**
       * Check for `input_aspects` for `atomic` rules
       */
      if (rule_type.toLowerCase() === `atomic`) {
        expect(frontmatter).toHaveProperty('input_aspects');
        expect(frontmatter).not.toHaveProperty('input_rules');
      }
    })
})

describe(`validate rules body > headings`, () => {
  test.each(rulesData)(`rule %p`,
    (name, { body }) => {
      const headings = getAllHeadingsFromMarkdownBody(body)

      const level2Headings = getHeadingOfDepth(headings, 2)
      expect(level2Headings).toEqual(
        expect.arrayContaining([
          `Applicability`,
          `Assumptions`,
          `Accessibility Support`,
          `Background`,
          `Test Cases`,
        ])
      );

      const level3Headings = getHeadingOfDepth(headings, 3)
      expect(level3Headings).toEqual(
        expect.arrayContaining([
          `Passed`,
          `Failed`,
          `Inapplicable`
        ])
      );
    })
})