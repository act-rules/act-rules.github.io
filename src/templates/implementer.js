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
				{
					data.map((assertion, index) => {
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
					})
				}
			</tbody>
		</table>
	)
}

export default (props) => {
	const { data, location } = props
	const { site, sitePage } = data
	const { context } = sitePage
	const { title: pageTitle, data: contextData } = context

	const updatedTitle = `${pageTitle} | ${site.siteMetadata.title}`
	const report = JSON.parse(contextData)
	const { data: ruleImplementations } = report

	let showIncomplete = false
	if (location.search) {
		const parsedSearch = queryString.parse(location.search);
		const { incomplete = false } = parsedSearch
		showIncomplete = incomplete === "true"
	}

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<section className="page-container page-implementers">
				<h1>{pageTitle}</h1>
				{ruleImplementations.map((ruleImplementation, index) => {
					const { ruleId, ruleName, implementation } = ruleImplementation
					const { complete, incorrect, assertions } = implementation[0]
					const key = `${index}-${ruleId}`
					const isComplete = complete && incorrect.length === 0

					return (
						<div key={key}>
							<Link to={`/rules/${ruleId}`}>
								<h2 id={`#${ruleId}`}>{ruleName}</h2>
							</Link>
							{(!isComplete && showIncomplete) && (
								<div className="invalid">
									Incomplete implementation.
									<br />
									Listed below are the incomplete assertions. Kindly submit an amended implementation report.
								</div>
							)}
							{isComplete
								? getTabulation(assertions)
								: getTabulation(
									assertions.filter(({ url }) => {
										return incorrect.includes(url)
									})
								)}
						</div>
					)
				})}
			</section>
		</Layout>
	)
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
