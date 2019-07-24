const path = require('path')
const fastmatter = require('fastmatter')
const readFile = require('./read-file')

const getMarkdownData = (markdownPath) => {
  const filename = path.parse(markdownPath).base
  const fileContents = readFile(markdownPath)
  const { attributes: frontmatter, body } = fastmatter(fileContents)
  return {
    filename,
    frontmatter,
    body
  }
}

module.exports = getMarkdownData