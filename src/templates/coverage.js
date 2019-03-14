import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import implementations from './../../_data/implementations'

export default ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <Layout>
      <section className="page-container">
        <h1>{frontmatter.title}</h1>

        <div
          dangerouslySetInnerHTML={{__html: html}}
        />

        <table>
          <thead>
            <tr>
              <th width='3%'>#</th>
              <th>Tool Name</th>
              <th>Version</th>
              <th>Created By</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {
              implementations.map((row, index) => {
                return (
                  <tr key={row.vendorName}>
                    <td width='3%'>{index + 1}</td>
                    <td>{row.vendorTool}</td>
                    <td>{row.vendorToolVersion}</td>
                    <td>{row.vendorName}</td>
                    <td>
                      <Link to={row.reportUrl}>
                        View Report
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
