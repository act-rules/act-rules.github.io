const path = require('path')
const fastmatter = require('fastmatter')
const globby = require('globby')
const readFile = require('./read-file')

/**
 * Parse file in a given path as markdown
 * @param {String} path file path
 * @returns {Object}
 */
const parseMarkdownFromPath = markdownPath => {
  const filename = path.parse(markdownPath).base
  const fileContents = readFile(markdownPath)
  const { attributes: frontmatter, body } = fastmatter(fileContents)
  return {
    filename,
    frontmatter,
    body
  }
}

/**
 * Get markdown data
 * @param {String|Array<String>} path path(s) of file to be read and whose markdown has to be parsed
 * @returns {Object|Array<Object>}
 */
const getMarkdownData = path => {
  if (Array.isArray(path)) {
    return globby.sync(path).map(path => parseMarkdownFromPath(path))
  }
  return parseMarkdownFromPath(path)
}

module.exports = getMarkdownData