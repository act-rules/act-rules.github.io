const { createFilePath } = require('gatsby-source-filesystem')

// TODO: jsdocs
const getNodeData = (options) => {
  const { node, getNode } = options
  const fileNode = getNode(node.parent)
  const { sourceInstanceName, relativePath } = fileNode


  const defaults = {
    sourceInstanceName: sourceInstanceName,
    markdownType: getMarkdownType(relativePath, sourceInstanceName),
    fileName: relativePath
  }

  switch (sourceInstanceName) {
    case 'rules':
      const url = node.id.slice(0, 6)
      return {
        ...defaults,
        path: `${sourceInstanceName}/${url}`
      }
    default:
      return {
        ...defaults,
        path: `${sourceInstanceName}${createFilePath({ node, getNode })}`
      }
  }
}

const getMarkdownType = (path, sourceInstanceName) => {
  if(sourceInstanceName === 'rules') {
    return 'rules'
  }

  if(/glossary/.test(path)) {
    return 'glossary'
  }
  if(/implementations/.test(path)) {
    return 'implementations'
  }
  if(/design/.test(path) || /structure/.test(path)) {
    return 'documentation'
  }
  return null;
}

module.exports = {
  getNodeData
}