import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { getChangelog } from '../utils/render-fragments'
import { repository } from './../../package.json'

export default ({ data }) => {
  const { site, sitePage } = data
  const { context } = sitePage
  const { title: pageTitle, fastmatterAttributes, changelog } = context

  const frontmatter = JSON.parse(fastmatterAttributes)
  const { id: ruleId } = frontmatter

  const updatedTitle = `Changelog for - ${pageTitle} | ${site.siteMetadata.title}`
  const ruleChangelog = JSON.parse(changelog)

  return (
    <Layout>
      <SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
      <section className="page-container page-rule-changelog">
        <h1>{updatedTitle}</h1>
      
        <Link to={`/rules/${ruleId}`}>
          Go Back to Rule {ruleId}
        </Link>
        {
          JSON.stringify(context)
        }
        {/* changelog */}
        {/* {getChangelog(ruleChangelog, repository.url, `_rules/${relativePath}`)} */}

      </section>
    </Layout>
  )
}

export const query = graphql`
	query($path: String!) {
		sitePage(path: { eq: $path }) {
			context {
        slug
        title
        changelog
        fastmatterAttributes
        data
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
