import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import { capitalizeFirstLetter } from '../../utils';
const moment = require('moment');
export const RecentPosts = () => (
    <StaticQuery
        query={graphql`
        query RecentPostsQuery {
          allWpPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    date(formatString: "MMMM DD, YYYY")
                    modified(formatString: "MMMM DD, YYYY")
                    author {
                      node {
                        avatar {
                          url
                        }
                        name
                        slug
                        id
                        url
                        description
                        slug
                      }
                    }
                    slug
                    title
                    content
                    featuredImage {
                      node {
                        localFile {
                          childImageSharp {
                            gatsbyImageData
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
                      <div className="flex-shrink-0">
                          <Link to={`/${post.node.categories[0].slug}/${moment(post.node.date).format('YYYY')}/${moment(post.node.date).format('MM')}/${post.node.slug}.html`} title={post.node.slug}>
                            <Image image={post.node.featured_media.localFile.childImageSharp.gatsbyImageData} alt={post.node.title} title={post.node.title} />
                          </Link>
                      </div>
                      <div className="flex-1 bg-white p-6 pt-0 flex flex-col justify-between">
                        <div className="flex-1 categories-container">
                          {post.node.categories && post.node.categories.length > 0 && post.node.categories.map((category, categoryIndex) => {
                              return (
                                  <a key={categoryIndex} href={`/category/${category.slug}`} className="inline-block" title={category.name}>
                                      <span
                                      className=
                                          'bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                                      >
                                      {capitalizeFirstLetter(category.name)}
                                      </span>
                                  </a>
                              );
                            })}
                            <a href={`/${post.node.categories[0].slug}/${moment(post.node.date).format('YYYY')}/${moment(post.node.date).format('MM')}/${post.node.slug}.html`} className="block mt-2">
                              <p className="text-xl font-semibold text-black-400 title">{post.node.title}</p>
                              <div className="mt-3 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></div>
                            </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <a href={post.node.author.href}>
                              <span className="sr-only">{post.node.author.name}</span>
                              <img className="h-10 w-10 rounded-full" src={post.node.author.avatar_urls.wordpress_48} alt="" />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-bold text-gray-900">
                              <a href={post.node.author.href} className="hover:underline">
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