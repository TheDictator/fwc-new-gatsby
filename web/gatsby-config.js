require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
})
const clientConfig = require("./client-config");
const isProd = process.env.NODE_ENV === "production";

const myQuery = `{
  pages: allSitePage {
    nodes {
      id: id
      component
      path
      componentChunkName
      jsonName
      internal {
        type
        contentDigest
        owner
      }
    }
  }
  posts: allWpPost {
      nodes {
        id:id
        categories {
          nodes {
            name
            slug
            wpChildren {
              nodes {
                name
                slug
              }
            }
          }
        }
        title
        excerpt
		content
        slug
        date(formatString: "MMMM DD, YYYY")
        modified
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
}`

const queries = [
    {
        query: myQuery,
        transformer: ({ data }) => data.pages.nodes, // optional
        indexName: "index name to target", // overrides main index name, optional
        settings: {
            // optional, any index settings
            // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        matchFields: ["slug", "modified"], // Array<String> overrides main match fields, optional
    },
]
module.exports = {
    siteMetadata: {
        title: `${process.env.GATSBY_SITE_NAME}`,
        description: `${process.env.GATSBY_SITE_DESCRIPTION}`,
        author: `@${process.env.GATSBY_SITE_AUTHOR}`,
        siteUrl: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`,
        social: {
            twitter: "",
            facebook: "",
            email: "kevin@fourthwc.com",
            linkedin: "",
            github: "",
        },
    },
    plugins: [
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/json/`,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: `${process.env.GATSBY_SITE_NAME}`,
                short_name: `${process.env.GATSBY_SITE_NAME}`,
                start_url: "/",
                background_color:
                    process.env.GATSBY_PRIMARY_ACCENT_COLOR || "#0047E0",
                theme_color:
                    process.env.GATSBY_PRIMARY_ACCENT_COLOR || "#0047E0",
                display: "minimal-ui",
                icon: "src/images/logo.png",
            },
        },
        "gatsby-plugin-typescript",
        {
            resolve: "gatsby-plugin-tslint",
            options: {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|cache|public)/,
            },
        },
        "gatsby-plugin-react-helmet",

        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
                head: false,
                anonymize: true,
                respectDNT: true,
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                pageTransitionDelay: 0,
            },
        },
        {
            resolve: "gatsby-source-sanity",
            options: {
                ...clientConfig.sanity,
                token: process.env.SANITY_READ_TOKEN,
                watchMode: !isProd,
                overlayDrafts: !isProd,
            },
        },
        {
            resolve: `gatsby-plugin-pinterest-twitter-facebook`,
            options: {
                delayTimer: 100,
                pinterest: {
                    enable: false,
                    tall: true,
                    round: false,
                },
                facebook: {
                    enable: false,
                    containerSelector: ".facebook-container",
                    profile: process.env.GATSBY_FACEBOOK_SOURCE,
                    // width: 340,
                    // height: 500,
                    tabs: "timeline, events, messages",
                    hideCover: false,
                    showFacepile: true,
                    smallHeader: false,
                    adaptContainerWidth: true,
                },
            },
        },
        // {
        // 	resolve: `gatsby-plugin-algolia`,
        // 	options: {
        // 	  appId: process.env.GATSBY_ALGOLIA_APP_ID,
        // 	  apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        // 	  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        // 	  queries: queries,
        // 	  chunkSize: 10000, // default: 1000
        // 	},
        // },
        `gatsby-plugin-sass`,
        `gatsby-plugin-postcss`,
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-advanced-sitemap",
        {
            resolve: "gatsby-plugin-offline",
            options: {
                precachePages: [
                    "/posts/*",
                    "/post/*",
                    "/tag/*",
                    "/category/*",
                    "/about",
                ],
            },
        },
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -50,
            },
        },
    ],
}
