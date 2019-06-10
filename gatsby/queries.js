const queries = {
	getAllRules: `{
    allMarkdownRemark(
      sort: { fields: [frontmatter___name], order: ASC }
      filter: { fields: { markdownType: { eq: "rules" } } }
    ) {
      totalCount
      edges {
        node {
          fileAbsolutePath
          rawMarkdownBody
          fields {
            markdownType
            slug
            fastmatterAttributes
          }
          frontmatter {
            name
            success_criterion
          }
        }
      }
    }
  }`,
}

module.exports = queries
