/**
 * Create glossary usages 
 * -> for each glossary item (find references in each rule)
 * -> this is saved in `_data` which is later used in `pages/glossary`
 */
const queries = require('./queries')
const regexps = require('./reg-exps')
const createFile = require('./../build/create-file')
const getAllMatchesForRegex = require('./get-all-matches-for-regex')

const createGlossaryUsagesInRules = options => {

  const { graphql } = options

  return graphql(queries.getAllRules).then(({ errors, data }) => {
    if (errors) {
      Promise.reject(errors)
    }

    /**
     * Eg: 
     * {
     *  `non-empty`: [
     *    { name: `aria valid ...`, slug: `rules/XXXXX` },
     *    ....
     *  ]
     *  ....
     * }
     */
    const glossaryUsages = {}

    const getAllRules = data.allMarkdownRemark.edges

    getAllRules
      .forEach(async (markdownPage) => {
        const { node } = markdownPage
        const { rawMarkdownBody, frontmatter, fields } = node
        const { name } = frontmatter
        const { slug } = fields

        const glossaryMatches = getAllMatchesForRegex(regexps.glossaryReferenceInRules, rawMarkdownBody, false)
        console.log(glossaryMatches);

        glossaryMatches
          .forEach((glossaryItem) => {
            const hasGlossaryKey = regexps.glossaryKey.test(glossaryItem.block)
            if (!hasGlossaryKey) {
              return;
            }

            const key = glossaryItem.block.match(regexps.glossaryKey)[1]
            if (!key) {
              return;
            }

            const usage = {
              name,
              slug
            }
            if (!glossaryUsages[key]) {
              glossaryUsages[key] = [usage]
              return
            }

            const exists = glossaryUsages[key].some(u => u.slug === usage.slug)
            if (exists) {
              return;
            }

            glossaryUsages[key] = glossaryUsages[key].concat(usage)
          })
      })

    /**
     * Create `_data/glossay-usages.json`
     */
    createFile(
      `./_data/glossary-usages.json`,
      JSON.stringify(glossaryUsages, undefined, 2)
    )

    console.info(`\n\n DONE!!! Generated Glossary Usages Data.`)
  })
}


module.exports = createGlossaryUsagesInRules