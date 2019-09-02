import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { getDateTimeFromUnixTimestamp } from '../utils/render-fragments'
import { repository } from './../../package.json'

const changesSvgIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 31.568 31.568">
			<g>
				<g>
					<path
						d="M1.889,31.568h8.282V0H1.889V31.568z M4.021,2.958h4.016V9.65H4.021V2.958z M4.021,11.964h4.016v2.776H4.021V11.964z
          M6.029,24.596c1.11,0,2.009,0.897,2.009,2.008c0,1.107-0.898,2.008-2.009,2.008c-1.108,0-2.007-0.9-2.007-2.008
          C4.021,25.494,4.92,24.596,6.029,24.596z"
					/>
					<path
						d="M11.643,31.568h8.282V0h-8.282V31.568z M13.777,2.958h4.016V9.65h-4.016V2.958z M13.777,11.964h4.016v2.776h-4.016V11.964
          z M15.784,24.596c1.11,0,2.009,0.897,2.009,2.008c0,1.107-0.898,2.008-2.009,2.008c-1.108,0-2.007-0.9-2.007-2.008
          C13.777,25.494,14.676,24.596,15.784,24.596z"
					/>
					<path
						d="M21.397,0v31.568h8.282V0H21.397z M25.539,28.611c-1.108,0-2.008-0.9-2.008-2.008c0-1.11,0.898-2.008,2.008-2.008
          c1.11,0,2.009,0.897,2.009,2.008C27.548,27.711,26.648,28.611,25.539,28.611z M27.548,14.74h-4.017v-2.776h4.017V14.74z
          M27.548,9.651h-4.017V2.958h4.017V9.651z"
					/>
				</g>
			</g>
		</svg>
	)
}

const getChangelogTabulation = (changelog, url, file) => {
	if (!changelog.length) {
		return null
	}
	return (
		<table className="compact">
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>See Changes</th>
				</tr>
			</thead>
			<tbody>
				{changelog.map(log => {
					const { commit: hash, msg, date } = log
					const changesUrl = `${url}/commit/${hash}`
					return (
						<tr key={hash}>
							<td nowrap="true">{getDateTimeFromUnixTimestamp(date)}</td>
							<td>{msg}</td>
							<td align="center">
								<a target="_blank" rel="noopener noreferrer" href={changesUrl} title="See all changes in commit">
									{changesSvgIcon()}
								</a>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default ({ data }) => {
	const { site, sitePage } = data
	const { context } = sitePage
	const { title: pageTitle, fastmatterAttributes, changelog, fileName } = context

	const { relativePath: ruleMarkdownFileName } = fileName

	const frontmatter = JSON.parse(fastmatterAttributes)
	const { id: ruleId, name } = frontmatter

	const updatedTitle = `${pageTitle} | ${site.siteMetadata.title}`
	const ruleChangelog = JSON.parse(changelog)

	return (
		<Layout>
			<SEO title={updatedTitle} keywords={site.siteMetadata.keywords} />
			<section className="page-container page-rule-changelog">
				<h1>{pageTitle}</h1>

				{/* changelog */}
				{getChangelogTabulation(ruleChangelog, repository.url, `_rules/${ruleMarkdownFileName}`)}

				{/* backlink to rule */}
				<br />

				<Link to={`/rules/${ruleId}`}>See Rule: {name}</Link>
			</section>
		</Layout>
	)
}

export const query = graphql`
	query($path: String!) {
		sitePage(path: { eq: $path }) {
			context {
				slug
				title
				changelog
				fastmatterAttributes
				fileName {
					relativePath
				}
			}
		}
		site {
			siteMetadata {
				title
				keywords
			}
		}
	}
`
