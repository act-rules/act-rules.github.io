const codeBlocks = require('gfm-code-blocks');
const getAllMatchesForRegex = require('./get-all-matches-for-regex')
const testCaseTitleRegExp = /^#### (.*)/m
const createPageGenerateTestcases = (options) => {
  const { graphql, actions } = options
  const { createPage } = actions

  return graphql(`{
    allMarkdownRemark(
      sort: { fields: [frontmatter___name], order: ASC }
      filter: { fields: { markdownType: { eq: "rules" } } }
    ) {
      totalCount
      edges {
        node {
          rawMarkdownBody
          fields {
            markdownType
          }
          frontmatter {
            name
          }
        }
      }
    }
  }`).then(({ errors, data }) => {
    if (errors) {
      Promise.reject(errors)
    }


    const allRulePages = data.allMarkdownRemark.edges;
    allRulePages.forEach((markdownPage, index) => {
      const { node } = markdownPage
      const { rawMarkdownBody, frontmatter } = node
      const { name } = frontmatter
      if (index === 0) {
        const allCodeBlockTitleMatches = getAllMatchesForRegex(testCaseTitleRegExp, rawMarkdownBody)
        const allCodeBlockMatches = codeBlocks(rawMarkdownBody);

        allCodeBlockMatches.forEach(codeBlock => {
          const { code, start } = codeBlock
          return;
          // const title = findTitleForCodeBlock(codeBlock, allCodeBlockTitleMatches)
          // console.log(title);
        })
      }
    })
  })
}

function findTitleForCodeBlock(codeBlock, titles) {
  const { start } = codeBlock
  console.log(codeBlock)
  console.log(titles);
  console.log('===============');
  const distanceFromTitles = titles
    .map(title => {
      const { end } = title
      const distance = start - end;
      return distance;
    })
    .filter(distance => distance > 0)
    .sort()
  const [matchedTitleDistance, ...rest] = distanceFromTitles

  const title = titles.find(title => {
    const { end } = title
    const distance = Math.abs(start-end)
    return distance === matchedTitleDistance
  })
  return title;
}


module.exports = createPageGenerateTestcases


/**
 *
 // sort both lists, find header index (where closest or less than),
// [50, 58, 65 ....
// regex -> [55, 63, ....

 * * regex for catching passed/ failed - `/^#### (.*)/m`
 * regex for catching code blocks -
 */