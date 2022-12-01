import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import PostCards from "./cards";
export const CategoryPosts = () => (
  <StaticQuery
    query={graphql`
          query CategoryPostsQuery {
            allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "netsuite"}}}}}) {
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

export default CategoryPosts