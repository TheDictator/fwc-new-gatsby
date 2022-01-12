import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { decodeHtmlCharCodes } from "../../utils"

export const NavPosts = () => (
    <StaticQuery
        query={graphql`
          query NavPostsQuery {
            allWpPost(limit: 2) {
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
          {data.allWpPost.edges.map((post) => (
                <li key={post.id} className="flow-root">
                    <Link to={post.link} className="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                        <div className="hidden sm:block flex-shrink-0">
                            {post.featuredImage && (
                                <Link to={post.link} title={post.title}>
                                    <GatsbyImage
                                        className="w-32 h-20 object-cover rounded-md"
                                        image={getImage(
                                            post.featuredImage.node.localFile
                                        )}
                                        alt={post.title}
                                        width={400}
                                    />
                                </Link>
                            )}
                        </div>
                        <div className="w-0 flex-1 sm:ml-8">
                        <h4 className="text-base font-medium text-gray-900 truncate">
                            {post.title}
                        </h4>
                        <p
                            className="mt-3 text-base text-gray-500"
                            dangerouslySetInnerHTML={{
                                __html: decodeHtmlCharCodes(
                                    post.excerpt
                                ),
                            }}
                        />
                        </div>
                    </Link>
                </li>
            ))}
          </>
        )
        }}
    />
)

export default NavPosts