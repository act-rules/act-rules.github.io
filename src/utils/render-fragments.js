import React from 'react'
import scUrls from './../../_data/sc-urls'
import { Link } from 'gatsby'
import glossaryUsages from './../../_data/glossary-usages.json'

export const getChangelog = (changelog, url, file) => {
	if (!changelog.length) {
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
				{changelog.map(log => {
					const { commit: hash, msg, date } = log
					const versionUrl = `${url}/blob/${hash}/${file}`
					const changesUrl = `${url}/commit/${hash}`

					return (
						<li key={hash}>
							{getDateTimeFromUnixTimestamp(date)} - {msg}
							&nbsp;
							<a target="_blank"
								rel="noopener noreferrer"
								href={versionUrl}>
								See version
							</a>
							&nbsp;
							<a target="_blank"
								rel="noopener noreferrer"
								href={changesUrl}>
								See changes
							</a>
						</li>
					)
				})}
			</ul>
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
			<span className="heading">
				Rule Type
			</span>
			<p>{rule_type}</p>
		</li>
	)
}

export function getAccessibilityRequirements(accessibility_requirements, type = 'details') {
	if (!accessibility_requirements) {
		return (
			<div className="meta">
				<span className="heading">
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
			<span className="heading">
				Accessibility Requirements
			</span>
			<ul>
				{requirements.map(sc => {
					const scData = scUrls[sc]
					const { num, url, handle, wcagType, level } = scData

					if (type === 'text') {
						return (
							<li key={sc}>
								{num} {handle}
							</li>
						)
					}
					return (
						<li key={sc}>
							<details >
								<summary>
									{num} {handle}
								</summary>
								<ul>
									<li>
										<a
											className="sc-item"
											href={url}
											target="_blank"
											rel="noopener noreferrer">Learn More about {num} ({handle})
								</a>
									</li>
									<li>
										<strong>Required for conformance</strong>{' '} to WCAG {wcagType} level {level}
									</li>
									<li>
										Outcome mapping:
										<ul>
											<li>
												Any <code>failed</code> outcomes: not satisfied
										</li>
											<li>
												All <code>passed</code> outcomes: further testing is
													needed
										</li>
											<li>
												An <code>inapplicable</code> outcome: further testing is
													needed
										</li>
										</ul>
									</li>
								</ul>
							</details>
						</li>
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
			<h3 className="heading">
				Authors
			</h3>
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
							<a className="sc-item block"
								target="_blank"
								rel="noopener noreferrer"
								href={url}>
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
			<span className="heading">
				Input Aspects
			</span>
			<ul>
				{
					aspects.map(aspect => {
						const aHref = ruleFormatInputAspects[aspect]
							? ruleFormatInputAspects[aspect]
							: ruleFormatInputAspects["default"]
						return (
							<li key={aspect}>
								<a className="sc-item block"
									href={aHref}>
									{aspect}
								</a>
							</li>
						)
					})
				}
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
				<h3 className="heading">
					Input Rules
				</h3>
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

/**
 * Get formatted date from unix timestamp
 * @param {String} unixtimestamp UNIX timestamp
 */
function getDateTimeFromUnixTimestamp(unixtimestamp) {
	const months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const date = new Date(unixtimestamp * 1000);
	const year = date.getFullYear();
	const month = months_arr[date.getMonth()];
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = "0" + date.getMinutes();
	const seconds = "0" + date.getSeconds();
	return `${month} ${day}, ${year} (${hours}:${minutes.substr(-2)}:${seconds.substr(-2)})`
}