import React from 'react'
import scUrls from './../../_data/sc-urls'
import { contributors, repository } from './../../package.json'
import { Link } from 'gatsby'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import glossaryUsages from './../../_data/glossary-usages.json'

export const getChangelog = ruleChangelog => {
	if (!ruleChangelog.length) {
		return null
	}
	return (
		<>
			<br />
			<hr />
			<a id="changelog" href="#changelog">
				<h2>Changelog</h2>
			</a>
			<ul>
				{ruleChangelog.map(log => {
					const { commit, sanitized_subject_line } = log
					const subject = sanitized_subject_line.split('-').join(' ')
					const commitUrl = `${repository.url}/commit/${commit}`
					return (
						<li key={commit}>
							<a target="_blank" rel="noopener noreferrer" href={commitUrl}>
								{subject}
							</a>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export const getChangelogLink = ruleChangelog => {
	if (!ruleChangelog.length) {
		return null
	}
	return (
		<li>
			<a href="#changelog">Changelog</a>
		</li>
	)
}

export const getGlossaryUsed = (slug, allGlossary) => {
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

export const getGlossaryUsedLink = (slug, allGlossary) => {
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

export const getGlossaryItemsUsedInRule = slug => {
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

export function getRuleType(rule_type) {
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

export function getAccessibilityRequirements(accessibility_requirements) {
	if (!accessibility_requirements) {
		return (
			<div className="meta">
				<span role="heading" aria-level="1" className="heading">
					accessibility Requirements
				</span>
				<p>This rule is not required for conformance to WCAG at any level.</p>
			</div>
		)
	}

	const requirements = Object.keys(accessibility_requirements)
		.filter(key => {
			const value = accessibility_requirements[key]
			if (!value) {
				return false
			}
			const { forConformance } = value
			return !!forConformance
		})
		.map(key => key.split(':').pop())

	return (
		<div className="meta">
			<span role="heading" aria-level="1" className="heading">
				Accessibility Requirements
			</span>
			<Accordion allowMultipleExpanded="true" allowZeroExpanded="true">
				{requirements.map(sc => {
					const scData = scUrls[sc]
					return (
						<AccordionItem key={sc}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<a className="sc-item" key={sc} href={scData.url}>
										{scData.num} {scData.handle}
									</a>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<ul>
									<li>
										<strong>Required for conformance</strong>{' '}
									</li>
									<li>
										Outcome mapping:
										<ul>
											<li>
												Any <code>failed</code> outcomes: not satisfied{' '}
											</li>
											<li>
												All <code>passed</code> outcomes: further testing is
												needed{' '}
											</li>
											<li>
												An <code>inapplicable</code> outcome: further testing is
												needed{' '}
											</li>
										</ul>
									</li>
								</ul>
							</AccordionItemPanel>
						</AccordionItem>
					)
				})}
			</Accordion>
		</div>
	)
}

export function getAuthors(authors) {
	if (!authors) {
		return null
	}
	return (
		<div>
			<span role="heading" aria-level="1" className="heading">
				Authors
			</span>
			{authors.map(author => {
				const authorData = contributors.find(c => {
					return c.name.toLowerCase() === author.toLowerCase()
				})
				if (!authorData) {
					console.warn(`Author ${author}, not in contributor list.`)
					return null
				}
				return (
					<a
						className="sc-item block"
						href={authorData.url}
						key={authorData.name}
					>
						@{authorData.name}
					</a>
				)
			})}
		</div>
	)
}

export function getInputAspects(aspects) {
	if (!aspects) {
		return null
	}
	return (
		<>
			<span role="heading" aria-level="1" className="heading">
				Test Aspects
			</span>
			{aspects.map(ta => (
				<p key={ta}>{ta}</p>
			))}
		</>
	)
}

export function getInputRulesForRule(
	inputRules,
	allRules,
	stripBasePath = false
) {
	if (!inputRules) {
		return null
	}
	return (
		<div className="side-notes">
			<div className="meta">
				<span role="heading" aria-level="1" className="heading">
					Input Rules
				</span>
				{inputRules.map(inputRuleId => {
					const atomicRule = allRules.find(
						rule => rule.node.frontmatter.id === inputRuleId
					)
					const aHref = stripBasePath
						? atomicRule.node.fields.slug.replace('rules/', '')
						: atomicRule.node.fields.slug
					const name = atomicRule.node.frontmatter.name
					return (
						<a className="sc-item block" href={aHref} key={inputRuleId}>
							{name}
						</a>
					)
				})}
			</div>
		</div>
	)
}

export function getGlossaryUsageInRules(usages) {
	if (!usages) {
		return null
	}
	return (
		<div className="used-rules">
			<h3>Used In Rules:</h3>
			<ul>
				{usages.map(usage => (
					<li>
						<Link key={usage.slug} to={usage.slug}>
							{usage.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
