import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout/"
import SEO from "../components/seo"
import scUrls from './../../../_data/sc-urls'

import contributors from './../../../_data/contributors'


export default ({ data }) => {
  const { getRules } = data
  const { edges, totalCount } = getRules


  const getSuccessCriterion = (success_criterion) => {
    if (!success_criterion) {
      return null;
    }
    return (
      <div className='meta'>
        <span className='heading'>SUCCESS CRITERION</span>
        {
          success_criterion.map((sc) => {
            const scData = scUrls[sc]
            return (
              <a className='sc-item'
                key={sc}
                href={scData.url}>
                {scData.num} {scData.scId}
              </a>
            )
          })
        }
      </div>
    )
  }

  const getAuthors = (authors, contributors) => {
    if (!authors) {
      return null;
    }
    return (
      <aside style={{ width: `200px` }}>
        <div className='meta'>
          <span className='heading'>Authors</span>
          {
            authors.map((author) => {
              const authorData = contributors.find((c => {
                return c.name.toLowerCase() === author.toLowerCase()
              }))
              if (!authorData) {
                console.warn(`Author ${author}, not in contributor list.`)
                return null;
              }
              return (
                <a className='sc-item'
                  href={authorData.site}
                  key={authorData.name}>
                  @{authorData.name}
                </a>
              )
            })
          }
        </div>
      </aside>
    )
  }



  const getAtomicRules = (aRules) => {
    if (!aRules) {
      return null;
    }
    return (
      <aside style={{ width: `275px` }}>
        <div className='meta'>
          <span className='heading'>Atomic Rules</span>
          {
            aRules.map((rule) => {
              return (
                <a className='sc-item'
                  key={rule}>
                  {rule}
                </a>
              )
            })
          }
        </div>
      </aside>
    )
  }


  return (
    <Layout>
      {/* TODO: SEO */}
      <SEO
        title="Rules"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <section className='page-container rules-page'>
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
                  {getAuthors(authors, contributors)}

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