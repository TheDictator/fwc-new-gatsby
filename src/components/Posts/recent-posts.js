import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { Image } from "../image";
import PostCategories from "./categories"
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
                {data.allWpPost.edges.map(post => (
                    <div key={post.node.id} className="card flex flex-col rounded-lg shadow-lg overflow-hidden">
                     
                      <div className="flex-1 bg-white p-6 pt-0 flex flex-col justify-between">
                        <div className="flex-1 categories-container">
                           <PostCategories categories={post.node.categories} />
                            <a href={`/${post.node.categories.nodes[0].slug}/${moment(post.node.date).format('YYYY')}/${moment(post.node.date).format('MM')}/${post.node.slug}.html`} className="block mt-2">
                              <p className="text-xl font-semibold text-black-400 title">{post.node.title}</p>
                              <div className="mt-3 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></div>
                            </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <a href={post.node.author.uri}>
                              <span className="sr-only">{post.node.author.name}</span>
                              <img className="h-10 w-10 rounded-full" src={post.node.author.node.avatar.url} alt="" />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-bold text-gray-900">
                              <a href={post.node.author.uri} className="hover:underline">
                                {post.node.author.name}
                              </a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time dateTime={post.node.date}>{(post.node.modified && post.node.modified.length > 0) ? post.node.modified : post.node.date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
            </>
        )
        }}
    />
)

export default RecentPosts