import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/';
import SEO from '../components/seo';

export default ({ data }) => {
	const { allMarkdownRemark } = data;
	const { edges, totalCount } = allMarkdownRemark;

	return (
		<Layout>
			<SEO title="Glossary" keywords={[`Glossary`]} />

			<section className="page-container page-glossary">
				<h1>Glossary ({totalCount})</h1>
				<section className="listing">
					{edges.map(({ node }) => {
						const { frontmatter, html } = node;
						return (
							<article key={node.id}>
								<h2>{frontmatter.title}</h2>
								<div dangerouslySetInnerHTML={{ __html: html }} />
							</article>
						);
					})}
				</section>
			</section>
		</Layout>
	);
};

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
					}
					fields {
						markdownType
					}
					excerpt
				}
			}
		}
	}
`;
