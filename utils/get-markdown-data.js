const fs = require('fs')
const globby = require('globby')
const path = require('path')
const fastmatter = require('fastmatter')
const remark = require('remark')

/**
 * Parse all markdown files in a given directory and construct metadata of each markdown file
 *
 * @param {String} dir path to directory containing markdown files
 * @param {Array} exclude (Optional) list of paths to exclude
 * @returns {Object}
 */
const getMarkdownData = (dir, exclude = []) => {
	return globby.sync([`${dir}/**/*.md`, ...exclude]).map(markdownPath => {
		const filename = path.parse(markdownPath).base
		const fileContents = fs.readFileSync(markdownPath, { encoding: 'utf-8' })
		const markdownAST = remark.parse(fileContents)
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
