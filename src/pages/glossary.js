import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import SEO from '../components/seo'
import { getGlossaryUsageInRules } from './../utils/render-fragments'
import glossaryUsages from './../../_data/glossary-usages.json'

export default ({ data }) => {
	const { allMarkdownRemark } = data
	const { edges, totalCount } = allMarkdownRemark

	return (
		<Layout>
			<SEO title="Glossary" keywords={[`Glossary`]} />


			<section className="page-container page-glossary">
				<h1>Glossary ({totalCount})</h1>
				<section className="listing">
					{edges.map(({ node }) => {
						const { frontmatter, html } = node
						const { key } = frontmatter
						const usedInRules = glossaryUsages[`#${key}`]
						return (
							<article key={node.id}>
								<main>
									<a id={key} href={`#${key}`}>
										<h2>{frontmatter.title} ({key})</h2>
									</a>
									<i>key: <u>{key}</u></i>
									<div dangerouslySetInnerHTML={{ __html: html }} />
								</main>
								{getGlossaryUsageInRules(usedInRules)}
							</article>
						)
					})}
				</section>
			</section>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(
			sort: { fields: [frontmatter___title], order: ASC }
			filter: { fields: { markdownType: { eq: "glossary" } } }
		) {
			totalCount
			edges {
				node {
					id
					html
					frontmatter {
						title
						key
					}
					fields {
						markdownType
					}
					excerpt
				}
			}
		}
	}
`
