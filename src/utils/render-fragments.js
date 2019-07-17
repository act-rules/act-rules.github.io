import React from 'react'
import scUrls from './../../_data/sc-urls'
import { Link } from 'gatsby'
import glossaryUsages from './../../_data/glossary-usages.json'
import implementationMetrics from './../../_data/implementation-metrics.json'

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

export const getChangelog = (changelog, url, file) => {
	if (!changelog.length) {
		return null
	}
	return (
		<>
			<a id="changelog" href="#changelog">
				<h2>Changelog</h2>
			</a>
			<table className="compact">
				<tbody>
					{changelog.map(log => {
						const { commit: hash, msg, date } = log
						const versionUrl = `${url}/blob/${hash}/${file}`
						const changesUrl = `${url}/commit/${hash}`
						return (
							<tr key={hash}>
								<td nowrap="true">{getDateTimeFromUnixTimestamp(date)}</td>
								<td>{msg}</td>
								<td>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={versionUrl}
										title="See file at given version"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="16px"
											height="16px"
											viewBox="0 0 792 792"
										>
											<g>
												<g>
													<path
														d="M109.548,0c0,0-18.468,0-18.468,17.604V774.36c0,17.64,18.468,17.64,18.468,17.64h572.903c0,0,18.469,0,18.469-17.604V180
														H548.461c0,0-38.125,0-38.125-36V0H109.548z M205.452,108H434.16v36H205.452V108z M205.452,216H434.16v36H205.452V216z
														M586.619,684H205.452v-36h381.167V684z M586.619,576H205.452v-36h381.167V576z M586.619,468H205.452v-36h381.167V468z
														M586.619,324v36H205.452v-36H586.619z"
													/>
													<polygon points="548.496,144 685.836,144 548.496,13.212 		" />
												</g>
											</g>
										</svg>
									</a>
								</td>
								<td>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={changesUrl}
										title="See all changes in commit"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="16px"
											height="16px"
											viewBox="0 0 31.568 31.568"
										>
											<g>
												<g>
													<path
														d="M1.889,31.568h8.282V0H1.889V31.568z M4.021,2.958h4.016V9.65H4.021V2.958z M4.021,11.964h4.016v2.776H4.021V11.964z
														M6.029,24.596c1.11,0,2.009,0.897,2.009,2.008c0,1.107-0.898,2.008-2.009,2.008c-1.108,0-2.007-0.9-2.007-2.008
														C4.021,25.494,4.92,24.596,6.029,24.596z"
													/>
													<path
														d="M11.643,31.568h8.282V0h-8.282V31.568z M13.777,2.958h4.016V9.65h-4.016V2.958z M13.777,11.964h4.016v2.776h-4.016V11.964
														z M15.784,24.596c1.11,0,2.009,0.897,2.009,2.008c0,1.107-0.898,2.008-2.009,2.008c-1.108,0-2.007-0.9-2.007-2.008
														C13.777,25.494,14.676,24.596,15.784,24.596z"
													/>
													<path
														d="M21.397,0v31.568h8.282V0H21.397z M25.539,28.611c-1.108,0-2.008-0.9-2.008-2.008c0-1.11,0.898-2.008,2.008-2.008
														c1.11,0,2.009,0.897,2.009,2.008C27.548,27.711,26.648,28.611,25.539,28.611z M27.548,14.74h-4.017v-2.776h4.017V14.74z
														M27.548,9.651h-4.017V2.958h4.017V9.651z"
													/>
												</g>
											</g>
										</svg>
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

export const getChangelogLink = changelog => {
	if (!changelog.length) {
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
			<span className="heading">Rule Type</span>
			<p>{rule_type}</p>
		</li>
	)
}

export function getAccessibilityRequirements(
	accessibility_requirements,
	type = 'details'
) {
	if (!accessibility_requirements) {
		return (
			<div className="meta">
				<span className="heading">Accessibility Requirements Mapping</span>
				<p>This rule is not required for conformance to WCAG at any level.</p>
			</div>
		)
	}

	const conformanceRequirements = Object.entries(accessibility_requirements)
		.filter(([_, value]) => {
			if (!value) {
				return false
			}
			const { forConformance } = value
			return !!forConformance
		})

	const getOutcomeMapping = ({
		failed = 'not satisfied',
		passed = 'further testing is needed',
		inapplicable = 'further testing is needed'
	} = {}) => {
		return (
			<li>
				Outcome mapping:
				<ul>
					<li>
						Any <code>failed</code> outcomes: { failed }
					</li>
					<li>
						All <code>passed</code> outcomes: { passed }
					</li>
					<li>
						An <code>inapplicable</code> outcome: { inapplicable }
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
				<li key={sc}>{num} {handle} (Level: {level})</li>
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
							<a
								className="sc-item"
								href={url}
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn More about {num} ({handle})
							</a>
						</li>
						<li>
							<strong>Required for conformance</strong> to WCAG {wcagType}{' '} and above on level {level} and above
						</li>
						{getOutcomeMapping()}
					</ul>
				</details>
			</li>
		)
	}

	const ariaListing = (key, mapping, listType) => {
		const ref = key.split(':').slice(-1).pop();
		
		if (listType === 'text') {
			return (
				<li key={ref}>{mapping.title}</li>
			)
		}

		const href = `https://www.w3.org/TR/wai-aria-1.1/#${ref}`
		return (
			<li key={ref}>
				<details>
					<summary>
						{mapping.title}
					</summary>
					<ul>
						<li>
							<a
								className="sc-item"
								href={href}
								target="_blank"
								rel="noopener noreferrer">
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
					if(req.toLowerCase().includes('aria11')) {
						return ariaListing(req, mapping, type)
					}

					if(req.toLowerCase().includes('wcag')) {
						const sc = req.split(':').pop()
						return wcagListing(sc, type)
					}

					return (
						<>
							Accessibility Requirements have no mapping.
						</>
					)
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
							<a
								className="sc-item block"
								target="_blank"
								rel="noopener noreferrer"
								href={url}
							>
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
				<span className="heading">Input Rules</span>
				<ul>
					{inputRules.map(inputRuleId => {
						const atomicRule = allRules.find(
							rule => rule.node.frontmatter.id === inputRuleId
						)
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
				<span className="heading">Implementations</span>
				<span className="count">{metrics.length}</span>
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

/**
 * Get formatted date from unix timestamp
 * @param {String} unixtimestamp UNIX timestamp
 */
export function getDateTimeFromUnixTimestamp(unixtimestamp) {
	const months_arr = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	const date = new Date(unixtimestamp * 1000)
	const year = date.getFullYear()
	const month = months_arr[date.getMonth()]
	const day = date.getDate()

	return `${month} ${day}, ${year}`
}
