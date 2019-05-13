import React from 'react'
import scUrls from './../../_data/sc-urls'
import pkg from './../../package.json'
import { Link } from 'gatsby'

export function getAccessibilityRequirements(accessibility_requirements) {
	if (!accessibility_requirements) {
		return (
			<div className="meta">
				<span role="heading" aria-level="1" className="heading">
					accessibility Requirements
				</span>
				<p>
					This rule is not required for conformance to WCAG at any level.
				</p>
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
				accessibility Requirements
			</span>
			{requirements.map(sc => {
				const scData = scUrls[sc]
				return (
					<a className="sc-item" key={sc} href={scData.url}>
						{scData.num} {scData.handle}
					</a>
				)
			})}
		</div>
	)
}

export function getAuthors(authors) {
	if (!authors) {
		return null
	}
	return (
		<div className="side-notes">
			<div className="meta">
				<span role="heading" aria-level="1" className="heading">
					Authors
				</span>
				{authors.map(author => {
					const authorData = pkg.contributors.find(c => {
						return c.name.toLowerCase() === author.toLowerCase()
					})
					if (!authorData) {
						console.warn(`Author ${author}, not in contributor list.`)
						return null
					}
					return (
						<a className="sc-item" href={authorData.url} key={authorData.name}>
							@{authorData.name}
						</a>
					)
				})}
			</div>
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
					Atomic Rules
				</span>
				{inputRules.map(inputRuleId => {
					const atomicRule = allRules.find(rule =>
						rule.node.frontmatter.id === inputRuleId
					)
					const aHref = stripBasePath
						? atomicRule.node.fields.slug.replace('rules/', '')
						: atomicRule.node.fields.slug
					const name = atomicRule.node.frontmatter.name
					return (
						<a className="sc-item" href={aHref} key={inputRuleId}>
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
		<aside>
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
		</aside>
	)
}
