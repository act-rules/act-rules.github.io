const path = require('path')
const getComponent = require('./get-component')

const createPageAddMdContext = options => {
	const { graphql, actions } = options
	const { createPage } = actions

	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						rawMarkdownBody
						fields {
							slug
							sourceInstanceName
							markdownType
						}
						frontmatter {
							name
							title
							rule_type
						}
					}
				}
			}
		}
	`).then(({ errors, data }) => {
		if (errors) {
			Promise.reject(errors)
		}

		const { allMarkdownRemark } = data
		const { edges } = allMarkdownRemark

		/**
		 * iterate each markdown file
		 * - and create more context
		 */
		edges.forEach(({ node }) => {
			const slug = node.fields.slug
			const markdownType = node.fields.markdownType
			const fileName = node.fields.fileName
			const sourceInstanceName = node.fields.sourceInstanceName
			const frontmatterName = node.frontmatter.name
			const frontmatterTitle = node.frontmatter.title
			const frontmatterRuleType = node.frontmatter.rule_type
			createPage({
				path: slug,
				component: path.resolve(getComponent(markdownType, slug)),
				context: {
					slug,
					fileName: fileName,
					sourceInstanceName: sourceInstanceName,
					markdownType,
					title: frontmatterName ? frontmatterName : frontmatterTitle,
					ruleType: frontmatterRuleType,
				},
			})
		})
	})
}

module.exports = createPageAddMdContext
