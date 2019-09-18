const getNodeData = require('./get-node-data')

const onCreateNode = async options => {
	const { node, actions } = options
	const { createNodeField } = actions

	/**
	 * For markdown pages
	 * -> create extra property in the fields object
	 */
	if (node.internal.type === `MarkdownRemark`) {
		const nodeData = await getNodeData(options)
		const { path, fileName, changelog, fastmatterAttributes, sourceInstanceName, markdownType } = nodeData

		createNodeField({
			node,
			name: `slug`,
			value: path,
		})
		createNodeField({
			node,
			name: `fileName`,
			value: fileName,
		})
		createNodeField({
			node,
			name: `changelog`,
			value: changelog,
		})
		createNodeField({
			node,
			name: `fastmatterAttributes`,
			value: fastmatterAttributes,
		})
		createNodeField({
			node,
			name: `sourceInstanceName`,
			value: sourceInstanceName,
		})
		createNodeField({
			node,
			name: `markdownType`,
			value: markdownType,
		})
	}

	/**
	 * For site pages
	 * -> re-use the context object
	 * -> extend the fields object
	 */
	if (node.internal.type === 'SitePage') {
		createNodeField({ node, name: `slug`, value: node.path })

		if (node.context) {
			createNodeField({ node, name: `fileName`, value: node.context.fileName })
			createNodeField({ node, name: `title`, value: node.context.title })
			createNodeField({
				node,
				name: `sourceInstanceName`,
				value: node.context.sourceInstanceName,
			})
			createNodeField({
				node,
				name: `markdownType`,
				value: node.context.markdownType,
			})
			createNodeField({ node, name: `ruleType`, value: node.context.ruleType })
		}
	}
}

module.exports = onCreateNode
