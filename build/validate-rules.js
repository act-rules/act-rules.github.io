const fs = require('fs')
const path = require('path');
const globby = require('globby');
const fastmatter = require('fastmatter');

const exit = (msg, code) => {
  console[code > 0 ? 'error' : 'info'](msg)
  process.exit(code)
}

const isChildArraySubsetOfParent = (parent, child) => {
  return child.every(c => parent.includes(c));
}

const validateFrontmatter = (frontmatter, filePath) => {
  const filename = path.parse(filePath).base;
  const compulsoryKeys = [
    `id`,
    `name`,
    `rule_type`,
    `description`,
    `accessibility_requirements`,
    `authors`
  ]
  const keys = Object.keys(frontmatter)

  /**
   * 1) Check if all `compulsory` keys exist
   */
  if (!isChildArraySubsetOfParent(keys, compulsoryKeys)) {
    exit(
      `Rule - ${filename}, at least one of the compulsory frontmatter attributes - 'id', 'name', 'rule_type', 'description', 'accessibility_requirements', 'authors'.`,
      1
    )
  }


  const { rule_type } = frontmatter

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
      const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' });
      const { attributes: frontmatter } = fastmatter(fileContents);

      /**
       * 1) validate `frontmatter`
       */
      validateFrontmatter(frontmatter, filePath)
    })
}

/**
 * init
 */
(async () => {
  await validate()
  exit(`Success`, 0)
})()