const getNodeData = require('./get-node-data')

const onCreateNode = options => {
	const { node, actions } = options
	const { createNodeField } = actions

	/**
	 * For markdown pages
	 * -> create extra property in the fields object
	 */
	if (node.internal.type === `MarkdownRemark`) {
		const nodeData = getNodeData(options)
		createNodeField({ node, name: `slug`, value: nodeData.path })
		createNodeField({ node, name: `fileName`, value: nodeData.fileName })
		createNodeField({
			node,
			name: `sourceInstanceName`,
			value: nodeData.sourceInstanceName,
		})
		createNodeField({
			node,
			name: `markdownType`,
			value: nodeData.markdownType,
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
