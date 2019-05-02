import React from 'react'
import Layout from '../components/layout/'
import { graphql } from 'gatsby'
import showdown from 'showdown'
import {
	getSuccessCriterion,
	getAuthors,
	getAtomicRulesForRule,
	getTestAspects,
} from './../utils/render-fragments'
import glossaryUsages from './../../_data/glossary-usages.json'
import SEO from '../components/seo'

export default ({ data }) => {
	const { rule, allRules, allGlossary, site } = data
	const { html, frontmatter, tableOfContents, fields } = rule
	const { slug } = fields
	const converter = new showdown.Converter()
	const updatedTitle = `Rule | ${frontmatter.name} | ${site.siteMetadata.title}`
	const ruleId = slug.replace('rules/', '')
	const ruleTestcasesUrl = `/testcases/${ruleId}/rule-${ruleId}-testcases-for-em-report-tool.json`

	const getRuleType = rule_type => {
		if (!rule_type) {
			return null
		}
		return (
			<li>
				<span role="heading" aria-level="1" className="heading">
					Rule Type
				</span>
				<p>{rule_type}</p>
			</li>
		)
	}

	const getGlossaryItemsUsedInRule = slug => {
		const keys = []
		Object.keys(glossaryUsages).forEach(key => {
			glossaryUsages[key].forEach(({ slug: s }) => {
				if (s === slug && !keys.includes(key)) {
					keys.push(key)
				}
			})
		})
		return keys
	}

	const renderGlossaryUsed = slug => {
		const usedKeys = getGlossaryItemsUsedInRule(slug)
		if (!usedKeys) {
			return null
		}
		const glossaries = allGlossary.edges.filter(({ node }) => {
			const {
				frontmatter: { key },
			} = node
			return usedKeys.includes(`#${key}`)
		})
		if (!glossaries.length) {
			return null
		}
		return (
			<>
				<br />
				<hr />
				<a id="glossary-listing" href="#glossary-listing">
					<h2>Referenced Glossary</h2>
				</a>
				{glossaries.map(({ node }) => {
					const { frontmatter, html } = node
					const { key } = frontmatter
					return (
						<article key={node.id}>
							<a id={key} href={`#${key}`}>
								<h3>{frontmatter.title}</h3>
							</a>
							<i>
								key: <u>{key}</u>
							</i>
							<div dangerouslySetInnerHTML={{ __html: html }} />
							<br />
						</article>
					)
				})}
			</>
		)
	}

	const renderGlossaryUsedLink = slug => {
		const usedKeys = getGlossaryItemsUsedInRule(slug)
		if (!usedKeys) {
			return null
		}
		const glossaries = allGlossary.edges.filter(({ node }) => {
			const {
				frontmatter: { key },
			} = node
			return usedKeys.includes(`#${key}`)
		})
		if (!glossaries.length) {
			return null
		}
		return (
			<li>
				<a href="#glossary-listing">Referenced Glossary</a>
			</li>
		)
	}

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<section className="page-rule">
				{/* rule content */}
				<section>
					<header>
						{/* title */}
						<h1>{frontmatter.name}</h1>
					</header>
					{/* Description */}
					<br />
					<div
						dangerouslySetInnerHTML={{
							__html: converter.makeHtml(frontmatter.description),
						}}
					/>
					{/* html content */}
					<div
						dangerouslySetInnerHTML={{
							__html: html,
						}}
					/>
					{/* glossary */}
					{renderGlossaryUsed(slug)}
				</section>
				{/* Toc */}
				<div className="toc">
					{/* frontmatter */}

					<ul className="meta-data">
						{getRuleType(frontmatter.rule_type)}
						<li>{getSuccessCriterion(frontmatter.success_criterion)}</li>
						<li>{getTestAspects(frontmatter.test_aspects)}</li>
						<li>
							{getAtomicRulesForRule(
								frontmatter.atomic_rules,
								allRules.edges,
								true
							)}
						</li>
						<li>{getAuthors(frontmatter.authors)}</li>
					</ul>
					<span role="heading" aria-level="1" className="heading">
						Table of Contents
					</span>
					<div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
					<ul>{renderGlossaryUsedLink(slug)}</ul>
					<span role="heading" aria-level="1" className="heading">
						Download Testcases
					</span>
					<ul>
						<li>
							<a
								className="btn-secondary"
								aria-label="test cases of rule for use in wcag em report tool"
								target="_blank"
								rel="noopener noreferrer"
								href={ruleTestcasesUrl}>
								For EM Report Tool
							</a>
						</li>
					</ul>
				</div>
			</section>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		rule: markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			tableOfContents
			frontmatter {
				name
				rule_type
				description
				success_criterion
				test_aspects
				atomic_rules
				authors
			}
			fields {
				slug
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
		allGlossary: allMarkdownRemark(
			sort: { fields: [frontmatter___title], order: ASC }
			filter: { fields: { markdownType: { eq: "glossary" } } }
		) {
			totalCount
			edges {
				node {
					id
					html
					frontmatter {
						title
						key
					}
					fields {
						markdownType
					}
					excerpt
				}
			}
		}
		site {
			siteMetadata {
				title
				keywords
			}
		}
	}
`
