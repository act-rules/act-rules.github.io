import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout/"
import SEO from "../components/seo"

import { getSuccessCriterion, getAuthors, getAtomicRules } from './../utils/render-fragments'


export default ({ data }) => {
  const { getRules } = data
  const { edges, totalCount } = getRules



  return (
    <Layout>
      {/* TODO: SEO */}
      <SEO
        title="Rules"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <section className='page-container page-rules'>
        {/* Heading */}
        <h1>Rules ({totalCount})</h1>
        {/* Table of rules */}
        <section className='rules-listing'>
          {
            edges.map(({ node }, index) => {
              const { frontmatter, id, fields } = node
              const { name, description, success_criterion, authors, atomic_rules } = frontmatter
              const { slug } = fields
              return (
                <article key={id}>
                  <main>
                    {/* rule id */}
                    <Link to={slug}>
                      <h2>
                        {name}
                      </h2>
                    </Link>
                    {/* rule sc's */}
                    {getSuccessCriterion(success_criterion)}
                    {/* rule description */}
                    <p>{description}</p>
                  </main>
                  {/* atomic rules */}
                  {getAtomicRules(atomic_rules)}
                  {/* authors */}
                  {getAuthors(authors)}
                </article>
              )
            })
          }
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  getRules: allMarkdownRemark(
    sort: {
      fields: [frontmatter___name]
      order: ASC
    }
    filter: {
      fields: {
        markdownType: { eq: "rules"}
      }
      frontmatter: {
        success_criterion: { ne: null }
      }
    }
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          name
          description
          success_criterion
          rule_type
          atomic_rules
          authors
        }
        fields {
          markdownType
          slug
        }
      }
    }
  }
}
`