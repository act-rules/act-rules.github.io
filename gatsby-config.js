const pkg = require('./package.json')
const siteTitle = pkg.name.split('-').join(' ')

module.exports = {
	siteMetadata: {
		title: siteTitle,
		description: pkg.description,
		author: pkg.author,
		/**
		 * JSON.stringify is to keep graphql happy,
		 * as otherwise it endlessly complains about picking only properties necessary in the query
		 */
		placeholderValues: JSON.stringify({
			'site-title': `<b>${siteTitle}</b>`,
		}),
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Karla`,
						variants: [`400`, `700`],
					},
					{
						family: `Spectral`,
						variants: [`400`, `700`],
					},
				],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// md -> plugin(code snippets) (spits out a new html snippet) (each snippet gets generated as html) -> html
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-prismjs`,
					},
				],
			},
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'rules',
				path: `${__dirname}/_rules`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/pages`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/_data`,
			},
		},
	],
}