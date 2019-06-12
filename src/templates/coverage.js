import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import pkg from './../../package.json'

export default ({ data }) => {
	const { markdownRemark, site } = data
	const { html, frontmatter } = markdownRemark

	const updatedTitle = `${frontmatter.title} | ${site.siteMetadata.title}`
	const {
		config: { implementations },
	} = pkg

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
								<th width="3%">#</th>
								<th>Tool Name</th>
								{/* <th>Version</th> */}
								<th>Created By</th>
								<th>Report</th>
							</tr>
						</thead>
						<tbody>
							{implementations.map((row, index) => {
								const { provider, tool, data } = row
								const reportUrl = data.type === `JSON` ? data.path : data.url
								return (
									<tr key={row.provider}>
										<td width="3%">{index + 1}</td>
										<td>{tool}</td>
										{/* TODO: */}
										{/* <td>{row.vendorToolVersion}</td> */}
										<td>{provider}</td>
										<td>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={reportUrl}
											>
												View Report
											</a>
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
