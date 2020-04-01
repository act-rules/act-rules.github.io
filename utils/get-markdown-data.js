const fs = require('fs')
const globby = require('globby')
const path = require('path')
const fastmatter = require('fastmatter')
const unified = require('unified')
const remarkParse = require('remark-parse')
const remarkFrontmatter = require('remark-frontmatter')

/**
 * Parse all markdown files in a given directory and construct metadata of each markdown file
 *
 * @param {String} glob glob pattern of files to match
 * @returns {Object}
 */
const getMarkdownData = glob => {
	return globby.sync(glob).map(markdownPath => {
		const filename = path.parse(markdownPath).base
		const fileContents = fs.readFileSync(markdownPath, { encoding: 'utf-8' })
		const unifiedProcesser = unified()
			.use(remarkParse)
			.use(remarkFrontmatter)
		const markdownAST = unifiedProcesser.parse(fileContents)

		const { attributes: frontmatter, body } = fastmatter(fileContents)
		return {
			path: markdownPath,
			filename,
			frontmatter,
			body,
			markdownAST,
		}
	})
}

module.exports = getMarkdownData
