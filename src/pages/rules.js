import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import SEO from '../components/seo'
import showdown from 'showdown'
import {
	getAccessibilityRequirements,
	getInputRulesForRule,
	getImplementationsCount,
} from './../utils/render-fragments'

export default ({ data }) => {
	const { rules, allRules, site } = data
	const toListRules = rules.edges.filter(({ node }) => {
		const { fields } = node
		const { fastmatterAttributes } = fields
		const { accessibility_requirements } = JSON.parse(fastmatterAttributes)
		return !!accessibility_requirements
	})

	const updatedTitle = `Rules | ${site.siteMetadata.title}`
	const converter = new showdown.Converter()

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<section className="page-container page-rules">
				{/* Heading */}
				<h1>Rules</h1>
				{/* Table of rules */}
				<section className="rules-listing">
					{toListRules.map(({ node }) => {
						const { frontmatter, id, fields } = node
						const { name, description, input_rules } = frontmatter
						const { slug, fastmatterAttributes } = fields
						const { accessibility_requirements } = JSON.parse(
							fastmatterAttributes
						)
						return (
							<article key={id}>
								<section>
									{/* rule id */}
									<a href={slug.replace('rules/', '')}>
										<h2>{name}</h2>
									</a>
									{/* rule sc's */}
									{getAccessibilityRequirements(
										accessibility_requirements,
										'text'
									)}
									{/* input rules */}
									{getInputRulesForRule(input_rules, allRules.edges, true)}
									{/* implementation count */}
									{getImplementationsCount(slug)}
									{/* rule description */}
									<div
										dangerouslySetInnerHTML={{
											__html: converter.makeHtml(description),
										}}
									/>
								</section>
							</article>
						)
					})}
				</section>
			</section>
		</Layout>
	)
}

export const query = graphql`
	query {
		rules: allMarkdownRemark(
			sort: { fields: [frontmatter___name], order: ASC }
			filter: { fields: { markdownType: { eq: "rules" } } }
		) {
			totalCount
			edges {
				node {
					fileAbsolutePath
					id
					frontmatter {
						name
						description
						rule_type
						input_rules
					}
					fields {
						markdownType
						fastmatterAttributes
						slug
					}
				}
			}
		}
		allRules: allMarkdownRemark(
			filter: { fields: { markdownType: { eq: "rules" } } }
		) {
			totalCount
			edges {
				node {
					fields {
						fileName {
							relativePath
						}
						markdownType
						slug
					}
					frontmatter {
						id
						name
					}
				}
			}
		}
		site {
			siteMetadata {
				title
				description
				author
				keywords
			}
		}
	}
`
