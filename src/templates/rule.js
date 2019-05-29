import React from 'react'
import Layout from '../components/layout/'
import { graphql } from 'gatsby'
import showdown from 'showdown'
import {
	getChangelog,
	getChangelogLink,
	getGlossaryUsed,
	getGlossaryUsedLink,
	getRuleType,
	getAccessibilityRequirements,
	getAuthors,
	getInputRulesForRule,
	getInputAspects,
} from './../utils/render-fragments'
import SEO from '../components/seo'
import { contributors, repository, config } from './../../package.json'


export default ({ data }) => {
	const { rule, allRules, allGlossary, site } = data
	const { html, frontmatter, tableOfContents, fields } = rule
	const { slug, fastmatterAttributes, changelog } = fields
	const ruleChangelog = JSON.parse(changelog)
	const { accessibility_requirements } = JSON.parse(fastmatterAttributes)
	const converter = new showdown.Converter()
	const updatedTitle = `Rule | ${frontmatter.name} | ${site.siteMetadata.title}`
	const ruleId = frontmatter.id
	const ruleTestcasesUrl = `/testcases/${ruleId}/rule-${ruleId}-testcases-for-em-report-tool.json`
	const issuesUrl = `${repository.url}/issues?q=${ruleId}`
	const ruleFormatInputAspects = config['rule-format-metadata']['input-aspects']

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
					{/* frontmatter */}
					<ul className="meta">
						{getRuleType(frontmatter.rule_type)}
						<li>{getAccessibilityRequirements(accessibility_requirements)}</li>
						<li>{getInputAspects(frontmatter.input_aspects, ruleFormatInputAspects)}</li>
						<li>
							{getInputRulesForRule(
								frontmatter.input_rules,
								allRules.edges,
								true
							)}
						</li>
					</ul>
					<hr />
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
					{getGlossaryUsed(slug, allGlossary)}
					{/* changelog */}
					{getChangelog(ruleChangelog, repository.url)}
					{/* acknowledgements */}
					<br />
					<hr />
					<a id="acknowledgements" href="#acknowledgements">
						<h2>Acknowledgements</h2>
					</a>
					<ul class="meta">
						<li>{getAuthors(frontmatter.authors, contributors)}</li>
					</ul>
				</section>
				{/* Toc */}
				<div className="toc">
					<span role="heading" aria-level="1" className="heading">
						Table of Contents
					</span>
					<div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
					<ul>
						{getGlossaryUsedLink(slug, allGlossary)}
						{getChangelogLink(ruleChangelog)}
						<li>
							<a href="#acknowledgements">Acknowledgements</a>
						</li>
					</ul>
					<span role="heading" aria-level="1" className="heading">
						Useful Links
					</span>
					<ul>
						<li>
							<a
								className="btn-secondary"
								aria-label="test cases of rule for use in wcag em report tool"
								target="_blank"
								rel="noopener noreferrer"
								href={issuesUrl}
							>
								View Issues
							</a>
						</li>
						<li>
							<a
								className="btn-secondary"
								aria-label="test cases of rule for use in wcag em report tool"
								target="_blank"
								rel="noopener noreferrer"
								href={ruleTestcasesUrl}
							>
								Testcases (EM Report Tool)
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
			fileAbsolutePath
			frontmatter {
				id
				name
				rule_type
				description
				input_aspects
				input_rules
				authors
			}
			fields {
				slug
				fastmatterAttributes
				changelog
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
