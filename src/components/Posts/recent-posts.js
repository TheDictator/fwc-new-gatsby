import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import PostCards from "./cards";
const moment = require('moment');

export const RecentPosts = () => (
    <StaticQuery
        query={graphql`
          query RecentPostsQuery {
            allWpPost(limit: 3) {
              edges {
                node {
                  author {
                    node {
                      uri
                      avatar {
                        url
                      }
                    }
                  }
                  id
                  title
                  excerpt
                  date(formatString: "MMMM DD, YYYY")
                  modified(formatString: "MMMM DD, YYYY")
                  slug
                  uri
                  link
                  title
                  content
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          gatsbyImageData (
                            width: 800
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                          )
                        }
                      }
                    }
                  }
                  categories {
                    nodes {
                      id
                      count
                      description
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {			
        return (
                <>
                <PostCards posts={data.allWpPost.edges} />
            </>
        )
        }}
    />
)

export default RecentPosts