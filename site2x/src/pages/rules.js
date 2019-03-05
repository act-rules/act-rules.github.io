import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout/"
import SEO from "../components/seo"



export default ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      {/* TODO: SEO */}
      <SEO
        title="Rules"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <section className='page-container rules-page'>
        {/* Heading */}
        <h1>Rules</h1>

        {/* Table of rules */}
        <section className='rules-listing'>
          {
            edges.map(({ node }, index) => {
              const { frontmatter, id, fields } = node
              const { name, description, rule_type, success_criterion, authors, atomic_rules } = frontmatter
              const { slug } = fields
              return (
                <article key={id}>
                  <Link to={slug}>
                    <h2>{name}</h2>
                  </Link>
                  <div className='meta'>
                    <div>
                      <span className='heading'>SUCCESS CRITERION</span>
                      {
                        success_criterion.map((sc) => {
                          return (
                            <span key={sc} className='meta-item'>{sc}</span>
                          )
                        })
                      }
                    </div>
                  </div>

                  <p>{description}</p>
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
  allMarkdownRemark(filter: {
    fields: {
      markdownType: { eq: "rules"}
    }
    frontmatter: {
      success_criterion: { ne: null }
    }
  }) {
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