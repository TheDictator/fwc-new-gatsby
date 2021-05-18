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
						
						<div className="text-lg max-w-prose mx-auto">
						<h1>
							<span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
								Article
							</span>
							<span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
								{decodeHtmlCharCodes(props.data.wordpressPost.title)}
							</span>
						</h1>
						{(fluid && fluid.src && fluid.src.length > 0) && (
							<Image fluid={fluid} alt={props.data.wordpressPost.title} title={props.data.wordpressPost.title} />
						)}
						</div>
					<div className="post-content" className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(props.data.wordpressPost.content) }} />
					<div className="navigation-links margin-bottom-24px">
						{props.pageContext.next && props.pageContext.next.slug && (
							<Link to={`/${props.pageContext.next.categories[0].slug}/${moment(props.pageContext.next.date).format('YYYY')}/${moment(props.pageContext.next.date).format('MM')}/${props.pageContext.next.slug}.html`} title={props.pageContext.next.slug} className="bg-blue-600 text-white inline-flex items-center px-2 py-2 text-sm font-bold">
								Go to Previous Post
							</Link>
						)}
						{props.pageContext.previous && props.pageContext.previous.slug && (
							<Link to={`/${props.pageContext.previous.categories[0].slug}/${moment(props.pageContext.previous.date).format('YYYY')}/${moment(props.pageContext.previous.date).format('MM')}/${props.pageContext.previous.slug}.html`} title={props.pageContext.previous.slug} className="bg-blue-600 text-white inline-flex items-center px-3 py-0.5 text-sm font-bold">
								Go to Next Post
							</Link>
						)}
					</div>
					</article>
					<Disqus config={disqusConfig}/>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<TagCloud/>
					<span className="mt-2 mb-0 block leading-8 font-extrabold tracking-tight text-gray-900">
						{decodeHtmlCharCodes(props.data.wordpressPost.title)}
					</span>
					<div className="categories-container tags-container post-meta-container margin-bottom-24px">
						<span className="post-meta mb-2 block">
							<span className="date block">{(props.data.wordpressPost.modified && props.data.wordpressPost.modified.length > 0) ? props.data.wordpressPost.modified : props.data.wordpressPost.date}</span>
						</span>
						{categories && categories.length > 0 && categories.map((category, categoryIndex) => {
							return (
								<Link to={`/category/${category.slug}`} title={category.name} key={categoryIndex} className="bg-blue-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1">
									{capitalizeFirstLetter(category.name)}
								</Link>
							);
						})}
						{tags && tags.length > 0 && tags.map((tag, tagIndex) => {
							return (
								<Link to={`/tag/${tag.slug}`} title={tag.name} key={tagIndex} className="bg-blue-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1">
									{capitalizeFirstLetter(tag.name)}
								</Link>
							);
						})}
						<hr />
						<span className="post-meta mb-2 block">
							<span className="author block">{capitalizeFirstLetter(props.data.wordpressPost.author.name)}</span>
						</span>
					</div>
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
				id
				name
				url
				description
				link
				slug
				path
				wordpress_id
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
