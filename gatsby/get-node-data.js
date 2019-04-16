const fs = require('fs')
const fm = require('fastmatter')
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

	const defaults = {
		sourceInstanceName: sourceInstanceName,
		markdownType: getMarkdownType(relativePath, sourceInstanceName),
		fileName: relativePath,
	}

	switch (sourceInstanceName) {
		case 'rules':
			const fileContents = fs.readFileSync(absolutePath, { encoding: 'utf-8' })
			const { attributes } = fm(fileContents)
			const { id } = attributes
			console.log(id);
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
