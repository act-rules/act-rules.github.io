import React from 'react'
import scUrls from './../../_data/sc-urls'
import { Link } from 'gatsby'
import glossaryUsages from './../../_data/glossary-usages.json'
import implementationMetrics from './../../_data/implementation-metrics.json'

import rulesUsages from './../../_data/rules-usages.json'

export const getImplementations = slug => {
	const ruleId = slug.replace('rules/', '')
	const metrics = implementationMetrics[ruleId]
	if (!metrics) {
		return null
	}
	return (
		<>
			<a id="implementation-metrics" href="#implementation-metrics">
				<h2>Implementations</h2>
			</a>
			<table className="compact">
				<thead>
					<tr>
						<th>Tool Name</th>
						<th>Created By</th>
						<th>Report</th>
					</tr>
				</thead>
				<tbody>
					{metrics.map(metric => {
						const { organisation, tool } = metric
						const filename = tool
							.split(' ')
							.join('-')
							.toLowerCase()
						const reportUrl = `/implementation/${filename}#${ruleId}`
						return (
							<tr key={tool}>
								<td>{tool}</td>
								<td>{organisation}</td>
								<td>
									<a href={reportUrl}>View Report</a>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

export const getImplementationsLink = slug => {
	const ruleId = slug.replace('rules/', '')
	const metrics = implementationMetrics[ruleId]
	if (!metrics) {
		return null
	}
	return (
		<li>
			<a href="#implementation-metrics">Implementations ({metrics.length})</a>
		</li>
	)
}

export const getGlossaryUsed = (slug, allGlossary) => {
	const usedKeys = getGlossaryItemsUsedInRule(slug)
	// Always show the outcome definition:
	if (!usedKeys.includes('#outcome')) {
		usedKeys.push('#outcome')
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
			<a id="glossary-listing" href="#glossary-listing">
				<h2>Glossary</h2>
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
			<a href="#glossary-listing">Glossary</a>
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
			<span className="heading">Rule Type</span>
			<span>{rule_type}</span>
		</li>
	)
}

export function getAccessibilityRequirements(accessibility_requirements, type = 'details') {
	if (!accessibility_requirements) {
		return (
			<div className="meta">
				<span className="heading">Accessibility Requirements Mapping</span>
				<ul>
					<li>This rule is not required for conformance</li>
				</ul>
			</div>
		)
	}

	const conformanceRequirements = Object.entries(accessibility_requirements).filter(([_, value]) => {
		if (!value) {
			return false
		}
		const { forConformance } = value
		return !!forConformance
	})

	const getOutcomeMapping = ({
		failed = 'not satisfied',
		passed = 'further testing is needed',
		inapplicable = 'further testing is needed',
	} = {}) => {
		return (
			<li>
				Outcome mapping:
				<ul>
					<li>
						Any <code>failed</code> outcomes: {failed}
					</li>
					<li>
						All <code>passed</code> outcomes: {passed}
					</li>
					<li>
						An <code>inapplicable</code> outcome: {inapplicable}
					</li>
				</ul>
			</li>
		)
	}

	const wcagListing = (sc, listType) => {
		const scData = scUrls[sc]

		const { num, url, handle, wcagType, level } = scData

		if (listType === 'text') {
			return (
				<li key={sc}>
					{num} {handle} (Level: {level})
				</li>
			)
		}

		return (
			<li key={sc}>
				<details>
					<summary>
						{num} {handle} (Level: {level})
					</summary>
					<ul>
						<li>
							<a className="sc-item" href={url} target="_blank" rel="noopener noreferrer">
								Learn More about {num} ({handle})
							</a>
						</li>
						<li>
							<strong>Required for conformance</strong> to WCAG {wcagType} and above on level {level} and above
						</li>
						{getOutcomeMapping()}
					</ul>
				</details>
			</li>
		)
	}

	const ariaListing = (key, mapping, listType) => {
		const ref = key
			.split(':')
			.slice(-1)
			.pop()

		if (listType === 'text') {
			return <li key={ref}>{mapping.title}</li>
		}

		const href = `https://www.w3.org/TR/wai-aria-1.1/#${ref}`
		return (
			<li key={ref}>
				<details>
					<summary>{mapping.title}</summary>
					<ul>
						<li>
							<a className="sc-item" href={href} target="_blank" rel="noopener noreferrer">
								Learn More about {mapping.title}
							</a>
						</li>
						<li>
							<strong>Required for conformance</strong>
						</li>
						{getOutcomeMapping(mapping)}
					</ul>
				</details>
			</li>
		)
	}

	return (
		<div className="meta">
			<span className="heading">Accessibility Requirements Mapping</span>
			<ul>
				{conformanceRequirements.map(([req, mapping]) => {
					if (req.toLowerCase().includes('aria11')) {
						return ariaListing(req, mapping, type)
					}

					if (req.toLowerCase().includes('wcag')) {
						const sc = req.split(':').pop()
						return wcagListing(sc, type)
					}

					return <>Accessibility Requirements have no mapping.</>
				})}
			</ul>
		</div>
	)
}

export function getAuthors(authors, contributors) {
	if (!authors) {
		return null
	}
	return (
		<div>
			<h3 className="heading">Authors</h3>
			<ul>
				{authors.map(author => {
					const authorData = contributors.find(c => {
						return c.name.toLowerCase() === author.toLowerCase()
					})
					if (!authorData) {
						console.warn(`Author ${author}, not in contributor list.`)
						return null
					}
					const { url, name } = authorData
					return (
						<li key={name}>
							<a className="sc-item block" target="_blank" rel="noopener noreferrer" href={url}>
								{name}
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export function getInputAspects(aspects, ruleFormatInputAspects) {
	if (!aspects) {
		return null
	}
	return (
		<>
			<span className="heading">Input Aspects</span>
			<ul>
				{aspects.map(aspect => {
					const aHref = ruleFormatInputAspects[aspect]
						? ruleFormatInputAspects[aspect]
						: ruleFormatInputAspects['default']
					return (
						<li key={aspect}>
							<a className="sc-item block" href={aHref}>
								{aspect}
							</a>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export function getInputRulesForRule(inputRules, allRules, stripBasePath = false) {
	if (!inputRules) {
		return null
	}
	return (
		<div className="side-notes">
			<div className="meta">
				<span className="heading">Input Rules</span>
				<ul>
					{inputRules.map(inputRuleId => {
						const atomicRule = allRules.find(rule => rule.node.frontmatter.id === inputRuleId)
						const aHref = stripBasePath
							? atomicRule.node.fields.slug.replace('rules/', '')
							: atomicRule.node.fields.slug
						const name = atomicRule.node.frontmatter.name
						return (
							<li key={inputRuleId}>
								<a className="sc-item block" href={aHref}>
									{name}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export function getImplementationsCount(slug) {
	const ruleId = slug.replace('rules/', '')
	const metrics = implementationMetrics[ruleId]
	if (!metrics) {
		return null
	}
	return (
		<div className="side-notes">
			<div className="meta">
				<span className="heading">Implementations: {metrics.length}</span>
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
			<h3>Used In Rules ({usages.length}):</h3>
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

export function getRuleUsageInRules(ruleId) {
	const usages = rulesUsages[ruleId]
	if (!usages) {
		return null
	}
	return (
		<div className="side-notes">
			<div className="meta">
				<span className="heading">Used in rules</span>
				<ul>
					{usages.map(usage => (
						<li key={usage.slug}>
							<Link key={usage.slug} to={usage.slug}>
								{usage.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

/**
 * Get formatted date from unix timestamp
 * @param {String} unixtimestamp UNIX timestamp
 */
export function getDateTimeFromUnixTimestamp(unixtimestamp) {
	const months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const date = new Date(unixtimestamp * 1000)
	const year = date.getFullYear()
	const month = months_arr[date.getMonth()]
	const day = date.getDate()

	return `${month} ${day}, ${year}`
}
