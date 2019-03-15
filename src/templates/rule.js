import React from 'react';
import Layout from '../components/layout/';
import { graphql } from 'gatsby';
import {
	getSuccessCriterion,
	getAuthors,
	getAtomicRulesForRule,
	getTestAspects,
} from './../utils/render-fragments';

export default ({ data }) => {
	const { markdownRemark, allRules } = data;
	const { html, frontmatter, tableOfContents } = markdownRemark;

	const getRuleType = rule_type => {
		if (!rule_type) {
			return null;
		}
		return (
			<li>
				<span className="heading">Rule Type</span>
				<p>{rule_type}</p>
			</li>
		);
	};

	return (
		<Layout>
			<section className="page-rule">
				{/* rule content */}
				<main>
					{/* title */}
					<header>
						<h1>{frontmatter.name}</h1>
					</header>
					{/* Description */}
					<br />
					<p>{frontmatter.description}</p>
					{/* html content */}
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</main>
				{/* Toc */}
				<aside className="toc">
					{/* frontmatter */}

					<ul className="meta-data">
						{getRuleType(frontmatter.rule_type)}
						<li>{getSuccessCriterion(frontmatter.success_criterion)}</li>
						<li>{getTestAspects(frontmatter.test_aspects)}</li>
						<li>
							{getAtomicRulesForRule(
								frontmatter.atomic_rules,
								allRules.edges,
								true
							)}
						</li>
						<li>{getAuthors(frontmatter.authors)}</li>
					</ul>
					<span className="heading">Table of Contents</span>
					<div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
				</aside>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			tableOfContents
			frontmatter {
				name
				rule_type
				description
				success_criterion
				test_aspects
				atomic_rules
				authors
			}
		}
		allRules: allMarkdownRemark(
			filter: { fields: { markdownType: { eq: "rules" } } }
		) {
			totalCount
			edges {
				node {
					fields {
						fileName {
							relativePath
						}
						markdownType
						slug
					}
				}
			}
		}
	}
`;
