import React from 'react'
import Layout from '../components/layout/'
import { graphql } from 'gatsby'
import showdown from 'showdown'
import {
	getGlossaryUsed,
	getRuleUsageInRules,
	getGlossaryUsedLink,
	getRuleType,
	getAccessibilityRequirements,
	getAuthors,
	getInputRulesForRule,
	getInputAspects,
	getImplementations,
	getImplementationsLink,
	getDateTimeFromUnixTimestamp,
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
	const proposeChangeUrl = `${repository.url}/edit/develop/_rules/${relativePath}`
	const changelogUrl = `/rules/${ruleId}/changelog`
	const issuesUrl = `${repository.url}/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+${ruleId}+`
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
						<li>
							<span className="heading">Rule ID:</span>
							<span> {ruleId}</span>
						</li>
						<li>
							<span className="heading">Last modified:</span>
							<span> {getDateTimeFromUnixTimestamp(ruleChangelog[0].date)}</span>
						</li>
						<li>{getAccessibilityRequirements(accessibility_requirements)}</li>
						<li>{getRuleUsageInRules(ruleId)}</li>
						<li>{getInputAspects(frontmatter.input_aspects, ruleFormatInputAspects)}</li>
						<li>{getInputRulesForRule(frontmatter.input_rules, allRules.edges, true)}</li>
					</ul>
					<hr />
					{/* Description */}
					<h2 id="description">
						<a href="#description"
							aria-label="description permalink"
							className="anchor">
							<svg aria-hidden="true"
								focusable="false"
								height="16"
								viewBox="0 0 16 16"
								width="16">
								<path fillRule="evenodd"
									d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
								</path>
							</svg>
						</a>
						Description
					</h2>
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
					{/* Useful links */}
					<a href="#useful-links" id="useful-links">
						<h2>Useful Links</h2>
					</a>
					<ul>
						<li>
							<a target="_blank" rel="noopener noreferrer" href={issuesUrl}>
								Github issues related to this rule
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href={ruleTestcasesUrl}>
								Test case file for use in the WCAG-EM Report Tool
							</a>
						</li>
						<li>
							<a target="_blank" rel="noopener noreferrer" href={proposeChangeUrl}>
								Propose a change to the rule
							</a>
						</li>
						<li>
							<a rel="noopener noreferrer" href={changelogUrl}>
								Changelog
							</a>
						</li>
					</ul>
					<hr />
					{/* implementations */}
					{getImplementations(slug)}
					{/* acknowledgements */}
					<hr />
					<a id="acknowledgements" href="#acknowledgements">
						<h2>Acknowledgements</h2>
					</a>
					<div className="meta">{getAuthors(frontmatter.authors, contributors)}</div>
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
						<li>
							<a href="#useful-links">Useful Links</a>
						</li>
						{/* implementations */}
						{getImplementationsLink(slug)}
						<li>
							<a href="#acknowledgements">Acknowledgements</a>
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
		allRules: allMarkdownRemark(filter: { fields: { markdownType: { eq: "rules" } } }) {
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
