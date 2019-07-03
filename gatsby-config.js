const pkg = require('./package.json')

module.exports = {
	siteMetadata: {
		title: pkg.author,
		description: pkg.description,
		author: pkg.author,
		keywords: pkg.keywords,
		baseHref: process.env.NODE_ENV === 'development' ? '' : `${pkg.www.url}`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				start_url: `/`,

				icon: `src/images/logo.png`,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Lora`,
						variants: [`400`, `700`],
					},
					{
						family: `Roboto`,
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
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-prismjs`,
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
