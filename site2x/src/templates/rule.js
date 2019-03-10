import React from "react"
import Layout from "../components/layout/"

export default ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter, tableOfContents } = markdownRemark

  return (
    <Layout>
      <>
        {/* title */}
        <header>
          <h1>
            {frontmatter.name}
          </h1>
          <div>
            {frontmatter.rule_type}
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        {/* frontmatter */}
        <section>
          <ul>
            <li>{frontmatter.success_criterion}</li>
            <li>{frontmatter.test_aspects}</li>
            <li>{frontmatter.authors}</li>
          </ul>
        </section>
        {/* Description */}
        <section>
          {frontmatter.description}
        </section>
        {/* html content */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </>
    </Layout>
  )
}

export const query = graphql`query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {      
    html      
    tableOfContents
    frontmatter {       
      name      
      rule_type
      description
      success_criterion
      test_aspects
      authors
    }    
  }  
}`
