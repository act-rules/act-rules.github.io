import 'normalize.css';
import "./index.scss"

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "../header/index"

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    };
  }

  getListItemFromEdges(edges) {
    return edges.map((edge, index) => {
      const { node } = edge
      const { path, context } = node
      return (
        <li key={index}>
          <Link activeClassName='active' to={path}>{context.title}</Link>
        </li>
      )
    })
  }

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            getSiteTitle: site {
              siteMetadata {
                title
              }
            }
            getTopLevelNavigation:  allSitePage(
              sort: {
                fields: [fields___title]
                order: ASC
              }
              filter: { 
                context: { 
                  markdownType: { eq: null }
                  sourceInstanceName: { ne: null }
                } 
              }
            ) {
              group(field: context___markdownType) {
                fieldValue
                totalCount
                edges {
                  node {
                    path
                    context {
                      sourceInstanceName
                      title
                      markdownType
                    }
                  }
                }
              }
            }
            getNonRulesNavigation: allSitePage(
              sort: {
                fields: [fields___title]
                order: ASC
              }
              filter: { 
                context: { 
                  markdownType: { nin: [null, "rules", "glossary"] } 
                } 
              }
            ) {
              group(field: context___markdownType) {
                fieldValue
                totalCount
                edges {
                  node {
                    path
                    context {
                      title
                      markdownType
                    }
                  }
                }
              }
            }
          }
        `}
        render={
          data => {
            const { getSiteTitle, getTopLevelNavigation, getNonRulesNavigation } = data

            return (
              <section className='layout-container'>
                <aside>
                  <div className="logo">
                    <Header
                      siteTitle={getSiteTitle.siteMetadata.title}>
                    </Header>
                  </div>
                  <nav className="navigation">
                    <ul>
                      <hr />
                      {/* Top level Navigation */}
                      {getTopLevelNavigation.group.map((item) => this.getListItemFromEdges(item.edges))}
                      <hr />
                      {/* Rules */}
                      <li>
                        <Link to="/rules/" activeClassName="active">Rules</Link>
                      </li>
                      {/* Glossary */}
                      <li>
                        <Link to="/glossary/" activeClassName="active">Glossary</Link>
                      </li>
                      <hr />
                      {/* Other Navigation */}
                      {
                        getNonRulesNavigation.group.map((item, index) => {
                          const { totalCount, edges, fieldValue } = item
                          if (totalCount <= 0) {
                            return null;
                          }
                          const groupKey = `${fieldValue}-${index}`
                          return (
                            <>
                              <li key={groupKey}>
                                <p className='parent-item'>
                                  {fieldValue}
                                </p>
                                <ul>
                                  {this.getListItemFromEdges(edges)}
                                </ul>
                              </li>
                              <hr/>
                            </>
                          )
                        })
                      }
                    </ul>
                  </nav>
                </aside>
                <main>
                  {children}
                </main>
              </section>
            )
          }
        }>
      </StaticQuery>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout