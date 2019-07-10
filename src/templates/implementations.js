import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import implementers from './../../_data/implementers'

export default ({ data }) => {
	const { markdownRemark, site } = data
	const { html, frontmatter } = markdownRemark

	const updatedTitle = `${frontmatter.title} | ${site.siteMetadata.title}`

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<section className="page-container">
				<h1>{frontmatter.title}</h1>

				<section>
					<h2>Implementation Overview</h2>
					<table>
						<thead>
							<tr>
								<th>Tool Name</th>
								<th>Created By</th>
								<th>Report</th>
							</tr>
						</thead>
						<tbody>
							{implementers.map(row => {
								const { organisation, tool } = row
								const filename = tool
									.split(' ')
									.join('-')
									.toLowerCase()
								const reportUrl = `/implementation/${filename}`
								return (
									<tr key={tool}>
										<td>{tool}</td>
										{/* TODO: */}
										{/* <td>{row.vendorToolVersion}</td> */}
										<td>{organisation}</td>
										<td>
											<a href={reportUrl}>View Report</a>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</section>

				<div dangerouslySetInnerHTML={{ __html: html }} />
			</section>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
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
