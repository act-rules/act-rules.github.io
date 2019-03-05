import React from "react"
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
              const { frontmatter, id } = node
              const { name, description, rule_type, success_criterion, authors, atomic_rules } = frontmatter
              return (
                <article key={id}>
                  <h2>{name}</h2>
                  <div>
                    <span>
                      <span className='heading'>SUCCESS CRITERION:</span>
                      {
                        success_criterion.map((sc, index) => {
                          return (
                            <span key={sc}>{sc}</span>
                          )
                        })
                      }
                    </span>
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
      rule_type: { ne: "atomic" }
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
        }
      }
    }
  }
}
`