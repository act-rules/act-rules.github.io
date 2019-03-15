import React from 'react'
import scUrls from './../../_data/sc-urls'
import pkg from './../../package.json'
import {Link} from 'gatsby'

export function getSuccessCriterion(success_criterion) {
	if (!success_criterion) {
		return null
	}
	return (
		<div className="meta">
			<span className="heading">SUCCESS CRITERION</span>
			{success_criterion.map(sc => {
				const scData = scUrls[sc]
				return (
					<a className="sc-item" key={sc} href={scData.url}>
						{scData.num} {scData.scId}
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
		<aside style={{ width: `200px` }}>
			<div className="meta">
				<span className="heading">Authors</span>
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
		</aside>
	)
}

export function getTestAspects(test_aspects) {
	if (!test_aspects) {
		return null
	}
	return (
		<>
			<span className="heading">Test Aspects</span>
			{test_aspects.map(ta => (
				<p key={ta}>{ta}</p>
			))}
		</>
	)
}

export function getAtomicRulesForRule(
	atomicRulesForRule,
	allRules,
	stripBasePath = false
) {
	if (!atomicRulesForRule) {
		return null
	}
	return (
		<aside style={{ width: `275px` }}>
			<div className="meta">
				<span className="heading">Atomic Rules</span>
				{atomicRulesForRule.map(rule => {
					let atomicRule = allRules.find(atomicRule => {
						return (
							atomicRule.node.fields.fileName.relativePath.toLowerCase() ===
							`${rule.toLowerCase()}.md`
						)
					})
					const aHref = stripBasePath
						? atomicRule.node.fields.slug.replace('rules/', '')
						: atomicRule.node.fields.slug
					return (
						<a className="sc-item" href={aHref} key={rule}>
							{rule}
						</a>
					)
				})}
			</div>
		</aside>
	)
}

export function getGlossaryUsageInRules(usages) {
	if (!usages) {
		return null
	}
	return (
		<aside>
			<h3>Used In Rules:</h3>
			{
				usages.map(usage => (
					<Link key={usage.slug} to={usage.slug}>
						{usage.name}
					</Link>
				))
			}
		</aside>
	)
}