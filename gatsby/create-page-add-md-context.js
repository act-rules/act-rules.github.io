/**
 * Enhance markdown pages with more context
 * -> get all data necessary from `on-create-node` callback
 * -> extend `context` object on `markdown` pages
 */

const getTemplate = require('./get-template')

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
							fileName {
                relativePath
              }
							slug
							sourceInstanceName
							markdownType
							fastmatterAttributes
							changelog
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
		const { edges: rulesMarkdownPage } = allMarkdownRemark

		/**
		 * iterate each rules markdown file
		 * - and create more context
		 */
		rulesMarkdownPage.forEach(({ node }) => {
			const { frontmatter, fields } = node
			const {
				slug,
				markdownType,
				fastmatterAttributes,
				changelog,
				fileName,
				sourceInstanceName
			} = fields

			const {
				name: frontmatterName,
				title: frontmatterTitle,
				rule_type: frontmatterRuleType
			} = frontmatter

			const pageTitle = frontmatterName
				? frontmatterName
				: frontmatterTitle

			/**
			 * Create all markdown pages
			 */
			createPage({
				path: slug,
				component: getTemplate(markdownType, slug),
				context: {
					slug,
					fileName,
					sourceInstanceName,
					markdownType,
					fastmatterAttributes,
					changelog,
					title: pageTitle,
					ruleType: frontmatterRuleType,
				},
			})

			/**
			 * only for markdown pages of type `rules` -> create respective `changelog` pages
			 */
			if (markdownType === `rules`) {
				createPage({
					path: `${slug}/changelog`,
					component: getTemplate('changelog'),
					context: {
						slug,
						title: `Changelog for Rule: ${pageTitle}`,
						changelog,
						fastmatterAttributes,
						fileName
					}
				})
			}
		})
	})
}

module.exports = createPageAddMdContext
