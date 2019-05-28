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
					const atomicRule = allRules.find(
						rule => rule.node.frontmatter.id === inputRuleId
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

export function getChangelog(logs) {
	debugger
	if (!logs) {
		return null
	}
	return (
		<>
			<br />
			<hr />
			<a id="changelog" href="#changelog">
				<h2>Changelog</h2>
			</a>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Description</th>
						<th>Commit</th>
						<th>Diff</th>
					</tr>
				</thead>
				<tbody>
					{logs.map((log, index, arr) => {
						const { commit, date, message } = log
						const description = message.split('-').join(' ')
						const commitUrl = `https://github.com/act-rules/act-rules.github.io/commit/${commit}`
						const diffUrl = index === 0
							? `https://github.com/act-rules/act-rules.github.io/compare/${commit}^`
							: `https://github.com/act-rules/act-rules.github.io/compare/${arr[index - 1].commit}..${commit}`
						return (
							<tr key={commit}>
								<td>{date}</td>
								<td>{description}</td>
								<td>
									<a target="_blank"
										rel="noopener noreferrer"
										href={commitUrl}>
										{commit}
									</a>
								</td>
								<td>
									<a target="_blank"
										rel="noopener noreferrer"
										href={diffUrl}>
										View Diff
										</a>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}
