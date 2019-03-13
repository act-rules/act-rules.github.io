const path = require('path')
const getComponent = require('./get-component')
const re = require('gfm-code-block-regex');

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
    getCodeSnippets(markdownPages)
  })
}

function getCodeSnippets(markdownPages) {
  markdownPages.forEach(({ node }) => {
    const { rawMarkdownBody } = node
    var match = re().exec(rawMarkdownBody);
    console.log(match)

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