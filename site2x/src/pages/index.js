import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout
  >
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`]}
    />

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.name}{" "}
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
          }
          fields {            
            slug          
          }          
          excerpt
        }
      }
    }
  }
`