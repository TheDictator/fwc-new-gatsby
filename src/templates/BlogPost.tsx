import React from 'react';
import { graphql, Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Row, Col } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TagCloud from '../components/TagCloud';

import Comments from '../components/Comments';

import { Post, CategoryTagInfo } from '../contracts/post';
import { CommentEdges } from '../contracts/comment';

import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';
const moment = require('moment');
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { GrNext, GrPrevious } from "react-icons/gr";


import '../styles/blog.scss';

export interface Props {
	data: {
		wordpressPost: Post;
		allCommentsYaml: CommentEdges;
	};
	pageContext: {
		previous: {
			slug: string;
		}
		next: {
			slug: string;
		}
	};
	location: Location;
}

export const BlogPostPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data.wordpressPost.featured_media && props.data.wordpressPost.featured_media.localFile && props.data.wordpressPost.featured_media.localFile.childImageSharp && props.data.wordpressPost.featured_media.localFile.childImageSharp.fluid) ? props.data.wordpressPost.featured_media.localFile.childImageSharp.fluid : null;
	const categories: CategoryTagInfo[] = (props.data.wordpressPost.categories && props.data.wordpressPost.categories.length) > 0 ? props.data.wordpressPost.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
	const tags: CategoryTagInfo[] = (props.data.wordpressPost.tags && props.data.wordpressPost.tags.length) > 0 ? props.data.wordpressPost.tags : new Array<CategoryTagInfo>();
	const disqusConfig = {
		url: 'https://fwc-new.netlify.app/' + props.data.wordpressPost.path,
		identifier: props.data.wordpressPost.id,
		title: props.data.wordpressPost.title,
	  }
	return (
		<Layout location={props.location}>
			<SEO title={props.data.wordpressPost.title} description={props.data.wordpressPost.excerpt} />
			<div className="container container--l">
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<article className="post relative px-4 sm:px-6 lg:px-8">
						<div className="text-lg">
							<h1 className="mb-4">
								<span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
									Article
								</span>
								<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
									{decodeHtmlCharCodes(props.data.wordpressPost.title)}
								</span>
							</h1>
							<div className="my-2">
								{(fluid && fluid.src && fluid.src.length > 0) && (
									<Image className="rounded-lg shadow-lg object-cover object-center" fluid={fluid} alt={props.data.wordpressPost.title} title={props.data.wordpressPost.title} />
								)}
							</div>
						</div>
					<div className="post-content" className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(props.data.wordpressPost.content) }} />
					<div className="navigation-links margin-bottom-24px">
						{props.pageContext.next && props.pageContext.next.slug && (
							<Link to={`/${props.pageContext.next.categories[0].slug}/${moment(props.pageContext.next.date).format('YYYY')}/${moment(props.pageContext.next.date).format('MM')}/${props.pageContext.next.slug}.html`} title={props.pageContext.next.slug} className="bg-blue-600 text-white inline-flex items-center px-2 py-2 text-sm font-bold">
								<GrPrevious/> Prev
							</Link>
						)}
						{props.pageContext.previous && props.pageContext.previous.slug && (
							<Link to={`/${props.pageContext.previous.categories[0].slug}/${moment(props.pageContext.previous.date).format('YYYY')}/${moment(props.pageContext.previous.date).format('MM')}/${props.pageContext.previous.slug}.html`} title={props.pageContext.previous.slug} className="bg-blue-600 text-white inline-flex items-center px-3 py-0.5 text-sm font-bold">
								Next <GrNext/>
							</Link>
						)}
					</div>
					</article>
					<div className="px-4 sm:px-6 lg:px-8">
						<Disqus config={disqusConfig}/>
					</div>
				</Col>
				<Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<blockquote className="relative bg-white rounded-lg">
						<TagCloud/>
						<div className="categories-container tags-container post-meta-container px-8 mt-3">
							<span className="mt-2 mb-0 block leading-5 font-bold tracking-tight text-black">
								{decodeHtmlCharCodes(props.data.wordpressPost.title)}
							</span>
							<span className="post-meta mb-2 block">
								<span className="date block">{(props.data.wordpressPost.modified && props.data.wordpressPost.modified.length > 0) ? props.data.wordpressPost.modified : props.data.wordpressPost.date}</span>
							</span>
							{categories && categories.length > 0 && categories.map((category, categoryIndex) => {
								return (
									<Link to={`/category/${category.slug}`} title={category.name} key={categoryIndex} className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
										{capitalizeFirstLetter(category.name)}
									</Link>
								);
							})}
							{tags && tags.length > 0 && tags.map((tag, tagIndex) => {
								return (
									<Link to={`/tag/${tag.slug}`} title={tag.name} key={tagIndex} className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
										{capitalizeFirstLetter(tag.name)}
									</Link>
								);
							})}						
						</div>
						<div className="rounded-t-lg p-8">
							{/* <h3 className="text-xl text-center">About Author</h3> */}
							<div className="relative text-md text-gray-700 font-medium mt-4">
								<svg
									className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
									fill="currentColor"
									viewBox="0 0 32 32"
									aria-hidden="true"
								>
									<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
								</svg>
								<p className="relative">
									{props.data.wordpressPost.author.description}
								</p>
							</div>
						</div>
						<cite className="relative flex items-center justify-center justify-items-center bg-gray-600 rounded-b-lg not-italic py-6 shadow-lg">
							<a className="absolute rounded-full border-2 border-white hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:absolute top-0 transform -translate-y-1/2 transition-all">
								<img
									className="w-12 h-12 rounded-full bg-blue-300"
									src={props.data.wordpressPost.author.avatar_urls.wordpress_48}
									alt=""
								/>
							</a>
							<span className="relative text-indigo-300 font-semibold leading-7 mt-2">
								<p className="text-white font-semibold inline text-xl">{props.data.wordpressPost.author.name}</p>
							</span>
						</cite>
					</blockquote>
				</Col>
			</Row>
			</div>
		</Layout>
	);
};

export default BlogPostPage;

export const query = graphql`
	query($id: Int!, $slug: String!) {
		wordpressPost(wordpress_id: { eq: $id }) {
			title
			content
			excerpt
			date(formatString: "MMMM DD, YYYY")
			modified(formatString: "MMMM DD, YYYY")
			author {
				avatar_urls {
					wordpress_48
				}
				name
				slug
				wordpress_id
				id
				url
				description
				link
				slug
				path
			}
			slug
			wordpress_id
			featured_media {
				localFile {
					childImageSharp {
						fluid(maxWidth: 960, maxHeight: 600, quality: 85) {
							aspectRatio
							src
							srcSet
							sizes
							base64
							tracedSVG
							srcWebp
							srcSetWebp
						}
					}
				}
			}
			categories {
				id
				link
				wordpress_id
				count
				description
				name
				slug
				path
			}
			tags {
				id
				link
				wordpress_id
				count
				description
				name
				slug
				path
			}
		}
		allCommentsYaml(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					id
					name
					email
					message
					date
					slug
				}
			}
		}
	}
`;
