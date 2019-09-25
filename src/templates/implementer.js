import React from 'react'
import queryString from 'query-string'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'

const getTabulation = data => {
	return (
		<table className="compact">
			<thead>
				<tr>
					<th>Testcase Url</th>
					<th width="100px">Expected</th>
					<th width="100px">Actual</th>
				</tr>
			</thead>
			<tbody>
				{data.map((assertion, index) => {
					const { url, expected, actual } = assertion
					const key = `${index}-${url}`
					return (
						<tr key={key}>
							<td>
								<a target="_blank" rel="noopener noreferrer" href={url}>
									{url}
								</a>
							</td>
							<td>{expected}</td>
							<td>{actual}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

const getImplementationMarkup = (ruleId, ruleName, tabulation, showIncomplete) => {
	return (
		<div key={ruleId}>
			<Link to={`/rules/${ruleId}`}>
				<h2 id={`#${ruleId}`}>{ruleName}</h2>
			</Link>
			{showIncomplete && (
				<div className="invalid">
					<b>INCOMPLETE IMPLEMENTATION.</b> <br />
					Listed below are the incomplete assertions. Kindly submit an amended implementation report.
				</div>
			)}
			{tabulation}
		</div>
	)
}

const getRuleImplementationsWhereCompleteIs = (isComplete = false, ruleImplementation) => {
	const { implementation } = ruleImplementation
	const { complete } = implementation[0]
	return complete === isComplete
}

const getTabulatedImplementations = (ruleImplementations, showIncomplete) => {
	if (showIncomplete) {
		const inCompleteImplementations = ruleImplementations.filter(impl =>
			getRuleImplementationsWhereCompleteIs(false, impl)
		)
		if (!inCompleteImplementations || !inCompleteImplementations.length) {
			return (
				<div className="valid">
					<b>WELL DONE.</b> <br />
					All submitted implementation reports are complete.
				</div>
			)
		}
		return (
			<div>
				{inCompleteImplementations.map(({ ruleId, ruleName, implementation }) => {
					const { incorrect, assertions } = implementation[0]
					const tabulatedAssertions = getTabulation(assertions.filter(({ url }) => incorrect.includes(url)))
					return getImplementationMarkup(ruleId, ruleName, tabulatedAssertions, showIncomplete)
				})}
			</div>
		)
	}

	const completeImplementations = ruleImplementations.filter(impl => getRuleImplementationsWhereCompleteIs(true, impl))
	return (
		<div>
			{completeImplementations.map(({ ruleId, ruleName, implementation }) => {
				const { assertions } = implementation[0]
				const tabulatedAssertions = getTabulation(assertions)
				return getImplementationMarkup(ruleId, ruleName, tabulatedAssertions)
			})}
		</div>
	)
}

const getPage = (updatedTitle, keywords, pageTitle, pageContent) => {
	return (
		<Layout>
			<SEO title={updatedTitle} keywords={keywords} />
			<section className="page-container page-implementers">
				<h1>{pageTitle}</h1>
				{pageContent}
			</section>
		</Layout>
	)
}

export default props => {
	const { data, location } = props
	const { site, sitePage } = data
	const { context } = sitePage
	const { title: pageTitle, data: contextData } = context

	const updatedTitle = `${pageTitle} | ${site.siteMetadata.title}`
	const report = JSON.parse(contextData)
	const { data: ruleImplementations } = report

	const allIncompleteImplementations = ruleImplementations.every(impl =>
		getRuleImplementationsWhereCompleteIs(false, impl)
	)

	let showIncomplete = false
	if (location.search) {
		const parsedSearch = queryString.parse(location.search)
		const { incomplete = false } = parsedSearch
		showIncomplete = incomplete === 'true'
	}

	if (allIncompleteImplementations && !showIncomplete) {
		const content = (
			<div className="invalid">
				<b>INCOMPLETE IMPLEMENTATIONS.</b> <br />
				All implementations provided are incomplete. Kindly submit amended implementation reports.
			</div>
		)
		return getPage(updatedTitle, site.siteMetadata.keywords, pageTitle, content)
	}

	const pageContent = getTabulatedImplementations(ruleImplementations, showIncomplete)
	return getPage(updatedTitle, site.siteMetadata.keywords, pageTitle, pageContent)
}

export const query = graphql`
	query($path: String!) {
		sitePage(path: { eq: $path }) {
			context {
				data
				title
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
