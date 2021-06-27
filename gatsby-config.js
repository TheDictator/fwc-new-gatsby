require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

// const queries = require('./src/utils/algolia');

module.exports = {
	siteMetadata: {
		title: `${process.env.GATSBY_SITE_NAME}`,
		description: `${process.env.GATSBY_SITE_DESCRIPTION}`,
		author: `@${process.env.GATSBY_SITE_AUTHOR}`,
		siteUrl: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`,
		social: {
			twitter: '',
			facebook: '',
			email: 'kevin@fourthwc.com',
			linkedin: '',
			github: ''
		}
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		{
		resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: `${process.env.GATSBY_SITE_NAME}`,
				short_name: `${process.env.GATSBY_SITE_NAME}`,
				start_url: '/',
				background_color: process.env.GATSBY_PRIMARY_ACCENT_COLOR || '#0047E0',
				theme_color: process.env.GATSBY_PRIMARY_ACCENT_COLOR || '#0047E0',
				display: 'minimal-ui',
				icon: 'src/images/logo.png'
			},
		},
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: `${process.env.WPGRAPHQL_URL}`,
				verbose: true,
				develop: {
					hardCacheMediaFiles: true,
				},
				html: {
					useGatsbyImage: true,
					fallbackImageMaxWidth: 800
				},
				debug: {
					graphql: {
						copyHtmlResponseOnError: true
					}
				},
				perPage: 100,
				searchAndReplace: [{
					search: `${process.env.GATSBY_WORDPRESS_URL_PROTOCOL}://${process.env.GATSBY_WORDPRESS_URL_PATH}`,
					replace: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`
				}],
				requestConcurrency: 10,
				normalizer: function ({
					entities
				}) {
					return entities
				}
			}
		},
		{
			resolve: 'gatsby-plugin-import',
			options: {
				libraryName: "antd",
				style: true // or 'css'
			}
		},
		'gatsby-plugin-typescript',
		{
			resolve: 'gatsby-plugin-tslint',
			options: {
				test: /\.ts$|\.tsx$/,
				exclude: /(node_modules|cache|public)/
			}
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: 'src/images'
			}
		},
		'gatsby-plugin-antd',
		'gatsby-transformer-yaml', {
			resolve: 'gatsby-source-filesystem',
			options: {
				path: './src/data/comments',
				name: 'comments',
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
				head: false,
				anonymize: true,
				respectDNT: true,
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				pageTransitionDelay: 0,
			}
		},
		{
			resolve: `gatsby-plugin-pinterest-twitter-facebook`,
			options: {
				delayTimer: 100,
				pinterest: {
					enable: false,
					tall: true,
					round: false
				},
				facebook: {
					enable: false,
					containerSelector: '.facebook-container',
					profile: process.env.GATSBY_FACEBOOK_SOURCE,
					// width: 340,
					// height: 500,
					tabs: 'timeline, events, messages',
					hideCover: false,
					showFacepile: true,
					smallHeader: false,
					adaptContainerWidth: true
				}
			}
		},
		
		// {
		// 	resolve: `gatsby-plugin-algolia`,
		// 	options: {
		// 	  appId: process.env.GATSBY_ALGOLIA_APP_ID,
		// 	  apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
		// 	  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
		// 	  queries,
		// 	  chunkSize: 10000, // default: 1000
		// 	},
		// },
		{
		resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `fourthwave`
			}
		},
	
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-advanced-sitemap',
		{
			resolve: 'gatsby-plugin-offline',
			options: {
				precachePages: ['/posts/*', '/post/*', '/tag/*', '/category/*', '/about']
			}
		},
		
		
	]
}