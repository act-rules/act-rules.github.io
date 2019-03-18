import React from 'react'
import Layout from '../components/layout/'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

export default ({ data }) => {
	const { markdownRemark, site } = data
	const { html, frontmatter } = markdownRemark

	const updatedTitle = `${frontmatter.title} | ${site.siteMetadata.title}`

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<div>
				<h1>{frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
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
