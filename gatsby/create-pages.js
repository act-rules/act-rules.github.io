const path = require('path')
const getComponent = require('./get-component')

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`{      
    allMarkdownRemark {
      edges {          
        node {   
          rawMarkdownBody         
          fields {              
            slug
            sourceInstanceName
            markdownType
          }
          frontmatter {
            name
            title
            rule_type
          }        
        }        
      }      
    }    
  }`).then(({ errors, data }) => {
    if (errors) {
      Promise.reject(errors)
    }
    const markdownPages = data.allMarkdownRemark.edges

    enhanceMarkdownContext(markdownPages, createPage)
  })
}

function enhanceMarkdownContext(markdownPages, createPage) {
  markdownPages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(getComponent(node.fields.markdownType)),
      context: {
        slug: node.fields.slug, // used for page query
        fileName: node.fields.fileName,
        sourceInstanceName: node.fields.sourceInstanceName,
        markdownType: node.fields.markdownType,
        title: node.frontmatter.name
          ? node.frontmatter.name
          : node.frontmatter.title,
        ruleType: node.frontmatter.rule_type
      }
    })
  })
}



module.exports = createPages