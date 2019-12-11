const fs = require('fs')
const globby = require('globby')
const path = require('path')
const fastmatter = require('fastmatter')

const getMarkdownData = dir => {
	return globby.sync(`${dir}/**/*.md`).map(markdownPath => {
		const filename = path.parse(markdownPath).base
		const fileContents = fs.readFileSync(markdownPath, { encoding: 'utf-8' })
		const { attributes: frontmatter, body } = fastmatter(fileContents)
		return {
			filename,
			frontmatter,
			body,
		}
	})
}

module.exports = getMarkdownData
