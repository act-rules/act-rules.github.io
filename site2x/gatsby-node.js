const path = require('path')
const { getNodeData } = require('./gatsby/utils')
const getComponent = require('./gatsby/get-component')


exports.onCreateNode = (options) => {
  const { node, actions } = options
  const { createNodeField } = actions

  // TODO: handle markdown pages
  if (node.internal.type === `MarkdownRemark`) {
    const nodeData = getNodeData(options)
    createNodeField({ node, name: `slug`, value: nodeData.path })
    createNodeField({ node, name: `sourceInstanceName`, value: nodeData.sourceInstanceName })
    createNodeField({ node, name: `markdownType`, value: nodeData.markdownType })
  }

  // TODO: Docs, enhance page fields to allow for grouping
  if (node.internal.type === 'SitePage') {
    createNodeField({ node, name: `slug`, value: node.path });
    if (node.context) {
      createNodeField({ node, name: `title`, value: node.context.title })
      createNodeField({ node, name: `sourceInstanceName`, value: node.context.sourceInstanceName })
      createNodeField({ node, name: `markdownType`, value: node.context.markdownType })
      createNodeField({ node, name: `ruleType`, value: node.context.ruleType })
    }

  }
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`{      
    allMarkdownRemark {
      edges {          
        node {            
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
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(getComponent(node.fields.markdownType)),
        context: {
          slug: node.fields.slug, // used for page query
          sourceInstanceName: node.fields.sourceInstanceName,
          markdownType: node.fields.markdownType,
          title: node.frontmatter.name
            ? node.frontmatter.name
            : node.frontmatter.title,
          ruleType: node.frontmatter.rule_type
        }
      })
    })
  })
}
