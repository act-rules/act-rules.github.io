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
	getImplementations,
	getImplementationsLink,
} from './../utils/render-fragments'
import SEO from '../components/seo'
import { contributors, repository, config } from './../../package.json'

export default ({ data }) => {
	const { rule, allRules, allGlossary, site } = data
	const { html, frontmatter, tableOfContents, fields } = rule
	const { slug, fastmatterAttributes, changelog, fileName } = fields
	const { relativePath } = fileName
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
						<li>
							{getInputAspects(
								frontmatter.input_aspects,
								ruleFormatInputAspects
							)}
						</li>
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
					<hr />
					{/* glossary */}
					{getGlossaryUsed(slug, allGlossary)}
					<hr />
					{/* changelog */}
					{getChangelog(
						ruleChangelog,
						repository.url,
						`_rules/${relativePath}`
					)}
					<hr />
					{/* implementations */}
					{getImplementations(slug)}
					{/* acknowledgements */}
					<hr />
					<a id="acknowledgements" href="#acknowledgements">
						<h2>Acknowledgements</h2>
					</a>
					<div className="meta">
						{getAuthors(frontmatter.authors, contributors)}
					</div>
				</section>
				{/* Toc */}
				<div className="toc">
					{/* todo:jey needs fixing up */}
					<span role="heading" aria-level="1" className="heading">
						Table of Contents
					</span>
					<div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
					<ul>
						{/* glossary */}
						{getGlossaryUsedLink(slug, allGlossary)}
						{/* changelog */}
						{getChangelogLink(ruleChangelog)}
						{/* implementations */}
						{getImplementationsLink(slug)}
						<li>
							<a href="#acknowledgements">Acknowledgements</a>
						</li>
					</ul>
					{/* todo:jey needs fixing up */}
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
				fileName {
					relativePath
				}
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
