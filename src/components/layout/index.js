import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import ReactMedia from 'react-media'

import Header from '../header/index'
import Footer from '../footer'

import 'normalize.css'
import './index.scss'

class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showMenu: true,
		}
	}

	handleHideShowMenu() {
		this.setState(prevState => ({
			showMenu: !prevState.showMenu,
		}))
	}

	getListItemFromEdges(edges) {
		return edges.map(edge => {
			const { node } = edge
			const { path, context } = node

			if (!context || !context.title) {
				return null
			}

			const key = `${context.title}${path}`
			return (
				<li key={key}>
					<Link activeClassName="active" to={path}>
						{context.title}
					</Link>
				</li>
			)
		})
	}

	render() {
		const { children } = this.props
		return (
			<StaticQuery
				query={graphql`
					query {
						getSiteTitle: site {
							siteMetadata {
								title
							}
						}
						getTopLevelNavigation: allSitePage(
							sort: { fields: [context___title], order: ASC }
							filter: { context: { markdownType: { eq: "default" } } }
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
							sort: { fields: [context___title], order: ASC }
							filter: {
								context: {
									markdownType: { nin: ["default", "rules", "glossary"] }
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
				render={data => {
					const {
						getSiteTitle,
						getTopLevelNavigation,
						getNonRulesNavigation,
					} = data
					return (
						<section className="layout-container">
							{/* hide menu when width <= 600px */}
							<ReactMedia query="(max-width: 600px)"
								onChange={matches => (matches && this.state.showMenu) && this.handleHideShowMenu()} />
							{/* show menu when width > 600px */}
							<ReactMedia query="(min-width: 601px)"
								onChange={matches => (matches && !this.state.showMenu) && this.handleHideShowMenu()} />
							<aside className={this.state.showMenu ? 'show' : 'hide'}>
								<button
									className="nav-hide-show-menu"
									onClick={e => this.handleHideShowMenu()}
								>
									☰
								</button>
								<div className="logo">
									<Header siteTitle={getSiteTitle.siteMetadata.title} />
								</div>
								<nav className="navigation">
									<ul>
										{/* Top level Navigation */}
										{getTopLevelNavigation.group.map(item =>
											this.getListItemFromEdges(item.edges)
										)}
										<li>
											<hr />
										</li>
										{/* Rules */}
										<li key="rules">
											<Link to="/rules/" activeClassName="active">
												Rules
											</Link>
										</li>
										{/* Glossary */}
										<li key="glossary">
											<Link to="/glossary/" activeClassName="active">
												Glossary
											</Link>
										</li>
										<li>
											<hr />
										</li>
										{/* Other Navigation */}
										{getNonRulesNavigation.group.map((item, index) => {
											const { totalCount, edges, fieldValue } = item
											if (totalCount <= 0) {
												return null
											}
											const groupKey = `${fieldValue}-${index}`
											return (
												<li key={groupKey}>
													<p className="parent-item">{fieldValue}</p>
													<ul>{this.getListItemFromEdges(edges)}</ul>
													<hr />
												</li>
											)
										})}
									</ul>
								</nav>
							</aside>
							<main>
								<section>{children}</section>
								<Footer />
							</main>
						</section>
					)
				}}
			/>
		)
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
