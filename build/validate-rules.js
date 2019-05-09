const fs = require('fs')
const path = require('path');
const globby = require('globby');
const fastmatter = require('fastmatter');

const isArraySubset = (parent, child) => {
  return child.every(c => parent.includes(c));
}

const validateFrontMatter = (frontmatter, filePath) => {
  const filename = path.parse(filePath).base;
  const compulsoryKeys = [`id`, `name`, `rule_type`, `description`, `accessibility_requirements`, `authors`]
  const keys = Object.keys(frontmatter)

  /**
   * 1) Check if all `compulsory` keys exist
   */
  if (!isArraySubset(keys, compulsoryKeys)) {
    throw new Error(`One of the compulsory frontmatter attributes - 'id', 'name', 'rule_type', 'description', 'accessibility_requirements', 'authors', is missing in file - ${filePath}.`)
  }


  /**
   * 2) check for `input_rules` for `composite` rules
   */
  const { rule_type, input_rules } = frontmatter
  if (rule_type.toLowerCase() === `composite`) {

  }

  /**
   * check for `input_aspects` for `atomic` rules
   */
}

const validate = async () => {
  const errors = []

  const rulesFilesPaths = await globby(['./_rules/*.md'])

  if (!rulesFilesPaths || !rulesFilesPaths.length) {
    console.error()
  }

  

  rulesFilesPaths.forEach(filePath => {
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const { attributes: frontmatter } = fastmatter(fileContents);

    /**
     * 1) validate `frontmatter`
     */
    validateFrontMatter(frontmatter, filePath)
  })
}

/**
 * init
 */
(async () => {

  throw new Error(`I failed.`)
  // const isValid = await validate()

})()