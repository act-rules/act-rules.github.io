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
          <Link to={path}>{context.title}</Link>
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

          

            const accordionListItem = (e) => {
              if (!e.target) {
                e.stopPropagation()
                return;
              }
              const nodeName = e.target.nodeName.toUpperCase();
              if (nodeName !== 'A') {
                e.stopPropagation()
                return;
              }
              if (!Array.from(e.target.classList).includes('parent-item')) {
                e.stopPropagation()
                return;
              }
              e.currentTarget.classList.toggle('expanded')
            }

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
                      {/* Top level Navigation */}
                      {getTopLevelNavigation.group.map((item) => this.getListItemFromEdges(item.edges))}
                      {/* Rules */}
                      <li>
                        <Link to="/rules/">Rules</Link>
                      </li>
                      {/* Glossary */}
                      <li>
                        <Link to="/glossary/">Glossary</Link>
                      </li>
                      {/* Other Navigation */}
                      {
                        getNonRulesNavigation.group.map((item, index) => {
                          const { totalCount, edges, fieldValue } = item
                          if (totalCount <= 0) {
                            return null;
                          }
                          const groupKey = `${fieldValue}-${index}`
                          return (
                            <li key={groupKey}
                              onClick={(e) => accordionListItem(e)}>
                              <a
                                className={"parent-item " + (totalCount ? 'has-child' : 'hidden')}>
                                {fieldValue}
                              </a>
                              <ul>
                                {this.getListItemFromEdges(edges)}
                              </ul>
                            </li>
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