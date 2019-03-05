import React from "react"
import Layout from "../components/layout/"
import SEO from "../components/seo"

import './glossary.scss';

export default ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      {/* TODO: SEO */}
      <SEO
        title="Glossary"
        keywords={[`gatsby`, `application`, `react`]}
      />

      <section className='page-container'>
        <h1>Glossary</h1>
        {
          edges.map(({ node }) => {
            const { frontmatter, html } = node
            return (
              <article key={node.id}>
                <h2>{frontmatter.title}</h2>
                <a id={frontmatter.title}>{frontmatter.title}</a>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </article>
            )
          })
        }
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (filter: {fields: {markdownType: {eq: "glossary"}}}) {
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
`