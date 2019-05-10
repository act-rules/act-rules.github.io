const fs = require('fs')
const path = require('path');
const globby = require('globby');
const fastmatter = require('fastmatter');
const marked = require('marked');

/**
 * Utility function to exit `process` with the given `code`.
 * @param {String} msg message to `print` on `stdout`
 * @param {*} code exit code for `process`
 */
const exit = (msg, code) => {
  console[code > 0 ? 'error' : 'info'](msg)
  process.exit(code)
}

/**
 * Check if a given child array is a subset of a parent array.
 * @param {Array} parent comparator array
 * @param {Array} child comparer array
 */
const isChildArraySubsetOfParent = (parent, child) => {
  return child.every(c => parent.includes(c));
}

/**
 * Validate given `frontmatter` attributes for:
 * - existence of compulsory attributes.
 * - existence of optional attributes based on type of rule.
 * @param {Object} frontmatter meta data containtaing `frontmatter` attributes
 * @param {String} filename file name of rule
 */
const validateFrontmatter = (frontmatter, filename) => {
  const expectedFrontmatter = [
    `id`,
    `name`,
    `rule_type`,
    `description`,
    `accessibility_requirements`,
    `authors`
  ]
  const keys = Object.keys(frontmatter)
  const { rule_type } = frontmatter

  /**
   * 1) Check if all `compulsory` keys exist
   */
  if (!isChildArraySubsetOfParent(keys, expectedFrontmatter)) {
    exit(
      `Rule - ${filename}, is missing at least one of the compulsory frontmatter attributes - 'id', 'name', 'rule_type', 'description', 'accessibility_requirements', 'authors'.`,
      1
    )
  }

  /**
   * 2) check for `input_rules` for `composite` rules
   */
  if (rule_type.toLowerCase() === `composite`) {
    const { input_rules = null } = frontmatter
    if (!input_rules) {
      exit(
        `Rule - ${filename}, is of type "composite" & is missing "input_rules" attribute in frontmatter.`,
        1
      )
    }
  }

  /**
   * 3) check for `input_aspects` for `atomic` rules
   */
  if (rule_type.toLowerCase() === `atomic`) {
    const { input_aspects = null } = frontmatter
    if (!input_aspects) {
      exit(
        `Rule - ${filename}, is of type "composite" & is missing "input_aspects" attribute in frontmatter.`,
        1
      )
    }
  }
}

/**
 * Get all headings from a given body of text
 * @param {String} body text content of markdown file
 * @returns {Array<Object>} list of headings
 */
const getHeadingsFromMarkdownBody = (body) => {
  const lexer = new marked.Lexer({});
  const tokens = lexer.lex(body);
  const headings = []
  for (const i in tokens) {
    const line = tokens[i]
    if (line.type == 'heading') {
      headings.push(line)
    }
  }
  return headings
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

/**
 * Check for existence of headings
 * @param {String} filename file name
 * @param {Arrray<String>} expectedHeadings expected array of headings
 * @param {Array<String>} allHeadings all headings in body
 * @param {*} depth 
 */
const doHeadingsOfDepthExist = (filename, expectedHeadings, allHeadings, depth) => {
  const expected = getHeadingOfDepth(expectedHeadings, depth)
  const actual = getHeadingOfDepth(allHeadings, depth)
  if (!isChildArraySubsetOfParent(actual, expected)) {
    exit(
      `Rule - ${filename}, at least one of the headings is missing.\n\n
      Expected h${depth}: ${expectedStaticLevel2Headings}\n
      Actual h${depth}: ${actualStaticLevel2Headings}\n`,
      1
    )
  }
}

/**
 * Validate body of markdown file for:
 * - existence of headings in the right depth and order
 * - Case sensitivity of headings.
 * @param {String} body text content of markdown file
 * @param {String} filename file name of rule
 */
const validateBody = (body, filename) => {
  const expectedHeadings = [
    {
      depth: 2,
      text: `Applicability`,
      type: `static`
    },
    {
      depth: 2,
      text: `Expectation`,
      type: `dynamic`
    },
    {
      depth: 2,
      text: `Assumptions`,
      type: `static`
    },
    {
      depth: 2,
      text: `Accessibility Support`,
      type: `static`
    },
    {
      depth: 2,
      text: `Background`,
      type: `static`
    },
    {
      depth: 2,
      text: `Test Cases`,
      type: `static`
    },
    {
      depth: 3,
      text: `Passed`,
      type: `static`
    },
    {
      depth: 4,
      text: `Passed Example`,
      type: `dynamic`
    },
    {
      depth: 3,
      text: `Failed`,
      type: `static`
    },
    {
      depth: 4,
      text: `Failed Example`,
      type: `dynamic`
    },
    {
      depth: 3,
      text: `Inapplicable`,
      type: `static`
    },
    {
      depth: 4,
      text: `Inapplicable Example`,
      type: `dynamic`
    }
  ]
  const allHeadings = getHeadingsFromMarkdownBody(body)

  /**
   * get `expected` & `static` headings
   */
  const expectedStaticHeadings = expectedHeadings.filter(({ type }) => type === `static`)

  /**
   * Check if all `expected h2` exists 
   */
  doHeadingsOfDepthExist(filename, expectedStaticHeadings, allHeadings, 2)

  /**
   * Check if all `expected h3` exists 
   */
  doHeadingsOfDepthExist(filename, expectedStaticHeadings, allHeadings, 3)
}

const validate = async () => {
  const rulesFilesPaths = await globby(['./_rules/*.md'])

  if (!rulesFilesPaths || !rulesFilesPaths.length) {
    exit(
      `No rules to validate.`,
      1
    )
  }

  rulesFilesPaths
    .forEach(filePath => {
      const filename = path.parse(filePath).base;
      const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' });
      const { attributes: frontmatter, body } = fastmatter(fileContents);

      /**
       * 1) validate `frontmatter`
       */
      validateFrontmatter(frontmatter, filename)

      /**
       * 2) validate `body`
       */
      validateBody(body, filename)
    })
}

/**
 * init
 */
(async () => {
  await validate()
  exit(`Success`, 0)
})()