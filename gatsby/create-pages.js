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
    const slug = node.fields.slug;
    const markdownType = node.fields.markdownType;
    const fileName = node.fields.fileName;
    const sourceInstanceName = node.fields.sourceInstanceName;
    const frontmatterName = node.frontmatter.name;
    const frontmatterTitle = node.frontmatter.title;
    const frontmatterRuleType = node.frontmatter.rule_type;
    createPage({
      path: slug,
      component: path.resolve(getComponent(markdownType, slug)),
      context: {
        slug,
        fileName: fileName,
        sourceInstanceName: sourceInstanceName,
        markdownType,
        title: frontmatterName
          ? frontmatterName
          : frontmatterTitle,
        ruleType: frontmatterRuleType
      }
    })
  })
}



module.exports = createPages