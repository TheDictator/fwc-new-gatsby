import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Cta from '../../components/Ui/Cta'
import { StaticQuery, graphql } from "gatsby"
import PostCards from "../../components/Posts/cards"

export interface Props {
	location: Location;
}

export const ShopifyPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			<SEO title="Our Services" />
			<div className="relative bg-white py-16 sm:py-24 lg:py-32">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<h1 className="text-base font-semibold tracking-wider text-blue-600 uppercase">Our Services</h1>
					<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
						Shopify
					</p>
					<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        A popular platform that can be connected to NetSuite on the back end. 
					</p>
      			</div>
			</div>
			<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
				<div className="absolute inset-0">
					<div className="bg-white h-1/3 sm:h-2/3" />
				</div>
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center">
						<h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
							Shopify From Our Blog
						</h2>

					</div>
					<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
						<StaticQuery
							query={graphql`
                            query ShopifyCategoryPostsQuery {
                                allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "shopify"}}}}}) {
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
					</div>
				</div>
			</div>		
			<Cta
                headline="Ready to solve your woes?"
                description="Contact Us. The first hour is free."
            />
		</Layout>
	);
};

export default ShopifyPage;
