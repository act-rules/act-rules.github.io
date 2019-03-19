const { createFilePath } = require('gatsby-source-filesystem')
const customId = require('custom-id')

/**
 * Get node data, to enhance metadata of pages
 *
 * @param {Object} options options passed by gatsby node callback
 */
const getNodeData = options => {
	const { node, getNode } = options
	const fileNode = getNode(node.parent)
	const { sourceInstanceName, relativePath } = fileNode

	const defaults = {
		sourceInstanceName: sourceInstanceName,
		markdownType: getMarkdownType(relativePath, sourceInstanceName),
		fileName: relativePath,
	}

	switch (sourceInstanceName) {
		case 'rules':
			const hash = customId({name: relativePath})
			return {
				...defaults,
				path: `${sourceInstanceName}/${hash}`,
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
	return null
}

module.exports = getNodeData
