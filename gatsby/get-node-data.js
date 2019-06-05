const fs = require('fs')
const fastmatter = require('fastmatter')
const { createFilePath } = require('gatsby-source-filesystem')

/**
 * Get node data, to enhance metadata of pages
 *
 * @param {Object} options options passed by gatsby node callback
 */
const getNodeData = options => {
	const { node, getNode } = options
	const fileNode = getNode(node.parent)
	const { sourceInstanceName, relativePath, absolutePath } = fileNode
	const fileContents = fs.readFileSync(absolutePath, { encoding: 'utf-8' })
	const { attributes } = fastmatter(fileContents)

	const defaults = {
		sourceInstanceName: sourceInstanceName,
		markdownType: getMarkdownType(relativePath, sourceInstanceName),
		fileName: relativePath,
		fastmatterAttributes: JSON.stringify(attributes),
	}

	switch (sourceInstanceName) {
		case 'rules':
			const { id } = attributes
			return {
				...defaults,
				path: `${sourceInstanceName}/${id}`,
			}
		default:
			return {
				...defaults,
				path: `${sourceInstanceName}${createFilePath({ node, getNode })}`,
			}
	}
}

/**
 * Get markdown type
 *
 * @param {String} path path
 * @param {String} sourceInstanceName file system plugin instance name
 */
function getMarkdownType(path, sourceInstanceName) {
	if (sourceInstanceName === 'rules') {
		return 'rules'
	}
	if (/glossary/.test(path)) {
		return 'glossary'
	}
	if (/implementations/.test(path)) {
		return 'implementations'
	}
	if (/design/.test(path) || /structure/.test(path)) {
		return 'documentation'
	}
	return 'default'
}

module.exports = getNodeData
