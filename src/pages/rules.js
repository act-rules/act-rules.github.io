import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/'
import SEO from '../components/seo'
import showdown from 'showdown'
import {
	getSuccessCriterion,
	getAuthors,
	getAtomicRulesForRule,
} from './../utils/render-fragments'

export default ({ data }) => {
	const { rules, allRules, site } = data
	const { edges, totalCount } = rules

	const updatedTitle = `Rules | ${site.siteMetadata.title}`
	const converter = new showdown.Converter()

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<section className="page-container page-rules">
				{/* Heading */}
				<h1>Rules ({totalCount})</h1>
				{/* Table of rules */}
				<section className="rules-listing">
					{edges.map(({ node }, index) => {
						const { frontmatter, id, fields } = node
						const {
							name,
							description,
							success_criterion,
							authors,
							atomic_rules,
						} = frontmatter
						const { slug } = fields
						return (
							<article key={id}>
								<section>
									{/* rule id */}
									<a href={slug}>
										<h2>{name}</h2>
									</a>
									{/* rule sc's */}
									{getSuccessCriterion(success_criterion)}
									{/* rule description */}
									<div
										dangerouslySetInnerHTML={{
											__html: converter.makeHtml(description),
										}}
									/>
								</section>
								{/* atomic rules */}
								{getAtomicRulesForRule(atomic_rules, allRules.edges)}
								{/* authors */}
								{getAuthors(authors)}
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
			filter: {
				fields: { markdownType: { eq: "rules" } }
				frontmatter: { success_criterion: { ne: null } }
			}
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						name
						description
						success_criterion
						rule_type
						atomic_rules
						authors
					}
					fields {
						markdownType
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
