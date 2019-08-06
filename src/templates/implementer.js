import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'

export default ({ data }) => {
	const { site, sitePage } = data
	const { context } = sitePage
	const { title: pageTitle, data: contextData } = context

	const updatedTitle = `${pageTitle} | ${site.siteMetadata.title}`
	const report = JSON.parse(contextData)
	const { data: ruleImplementations } = report

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<section className="page-container page-implementers">
				<h1>{pageTitle}</h1>
				{ruleImplementations.map((ruleImplementation, index) => {
					const { ruleId, ruleName, implementation } = ruleImplementation
					const { assertions } = implementation[0]
					const key = `${index}-${ruleId}`
					return (
						<div key={key}>
							<Link to={`/rules/${ruleId}`}>
								<h2 id={`#${ruleId}`}>{ruleName}</h2>
							</Link>
							{
								<table className="compact">
									<thead>
										<tr>
											<th>Testcase Url</th>
											<th>Expected</th>
											<th>Actual</th>
										</tr>
									</thead>
									<tbody>
										{assertions.map((assertion, index) => {
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
							}
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
