import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { Image } from "../image";
import PostCards from "./cards";
import { capitalizeFirstLetter } from '../../utils';
const moment = require('moment');

export const RecentPosts = () => (
    <StaticQuery
        query={graphql`
          query RecentPostsQuery {
            allWpPost(limit: 10) {
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