import React from 'react';
import Layout from '../components/layout/';
import { graphql } from 'gatsby';

function template(content, data) {
	if (!data) {
		return content;
	}
	return content.replace(/\[(.*?)\]/g, (match, key) => {
		const value = data[key.toLowerCase()];
		if (typeof value !== 'undefined') {
			return value;
		}
		return match;
	});
}

export default ({ data }) => {
	const { markdownRemark, getSiteData } = data;
	const { html, frontmatter } = markdownRemark;

	const values = JSON.parse(getSiteData.siteMetadata.placeholderValues);

	return (
		<Layout>
			<section className="page-container">
				<h1>{frontmatter.title}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: template(html, values),
					}}
				/>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
		getSiteData: site {
			siteMetadata {
				title
				placeholderValues
			}
		}
	}
`;
