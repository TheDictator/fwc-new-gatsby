import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostCards from "../components/Posts/cards"
import { wpPost } from "../contracts/post"
import { capitalizeFirstLetter } from "../utils"
import "../styles/blog.scss"
import Cta from "../components/Ui/Cta"
import TagCloud from '../components/TagCloud';

export interface Props {
    pageContext: {
        group: { wpPost: wpPost }[]
        slug: string
        uri: string
        title: string
    }
    location: Location
}

export const BlogCategoryPostsPage = (props: Props) => {
    const { group } = props.pageContext
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)
    return (
        <Layout location={props.location}>
            <SEO
                title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`}
                description={site.siteMetadata.description}
            />
            <div className="relative bg-gray-500">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-gray-500"
                        style={{ mixBlendMode: "multiply" }}
                        aria-hidden="true"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    <span className="block bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent text-base font-semibold tracking-wide uppercase">
                        Blog
                    </span>
                    <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl m-0">
                        Browsing By Category:
                        <span className="bg-gray-600 text-white inline-flex items-center px-6 py-4 rounded-full font-bold mb-1 mt-4 ml-2 sm:mt-0 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <span className="bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent">
                                {capitalizeFirstLetter(props.pageContext.slug)}
                            </span>
                        </span>
                    </h1>
                </div>
            </div>
            <div className="container container--l px-4 md:px-0">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
					<div id="primary" className="content-area with-sidebar col-span-1 md:col-span-8 pb-24">
						<div className="posts mt-12 max-w-lg mx-auto grid gap-5 px-4 md:px-0 md:grid-cols-2 lg:max-w-none">
							<PostCards posts={group} />
						</div>
					</div>
					<div className="sidebar col-span-1 md:col-span-4 top-0 b-0 lg:sticky lg:h-screen" id="secondary">
						<blockquote className="relative bg-white rounded-lg m-0">
							<TagCloud/>
						</blockquote>
					</div>
				</div>
			</div>
			<Cta
                headline="Ready to solve your woes?"
                description="Contact Us. The first hour is free."
            />
        </Layout>
    )
}

export default BlogCategoryPostsPage
