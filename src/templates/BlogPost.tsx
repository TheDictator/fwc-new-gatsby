import React from 'react';
import { graphql, Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Button, Tag, Row, Col, Icon } from 'antd';

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
	let disqusConfig = {
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

				<div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              Article
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			{decodeHtmlCharCodes(props.data.wordpressPost.title)}
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
        </div>
        <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul>
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>
            Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
            porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
            purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              alt=""
              width={1310}
              height={873}
            />
            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
            volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
            non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
            congue erat ac. Cras fermentum convallis quam.
          </p>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div>
      </div>
    </div>
					<article className="post">
						<h1>{decodeHtmlCharCodes(props.data.wordpressPost.title)}</h1>
						<div className="categories-container tags-container post-meta-container margin-bottom-24px">
							{categories && categories.length > 0 && categories.map((category, categoryIndex) => {
								return (
									<Tag key={categoryIndex}>
										<Link to={`/category/${category.slug}`} title={category.name}>
											<Icon type="folder" />{capitalizeFirstLetter(category.name)}
										</Link>
									</Tag>
								);
							})}
							{tags && tags.length > 0 && tags.map((tag, tagIndex) => {
								return (
									<Tag key={tagIndex}>
										<Link to={`/tag/${tag.slug}`} title={tag.name}>
											<Icon type="tag" />{capitalizeFirstLetter(tag.name)}
										</Link>
									</Tag>
								);
							})}
							<span className="post-meta margin-left-2px">
								<span className="author">{capitalizeFirstLetter(props.data.wordpressPost.author.name)}</span>
								<span className="separator"></span>
								<span className="date">{(props.data.wordpressPost.modified && props.data.wordpressPost.modified.length > 0) ? props.data.wordpressPost.modified : props.data.wordpressPost.date}</span>
							</span>
						</div>
						{(fluid && fluid.src && fluid.src.length > 0) && (
							<Image fluid={fluid} alt={props.data.wordpressPost.title} title={props.data.wordpressPost.title} />
						)}
						<div className="post-content" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(props.data.wordpressPost.content) }} />
						<div className="navigation-links margin-bottom-24px">
							{props.pageContext.next && props.pageContext.next.slug && (
								<Link to={`/${props.pageContext.next.categories[0].slug}/${moment(props.pageContext.next.date).format('YYYY')}/${moment(props.pageContext.next.date).format('MM')}/${props.pageContext.next.slug}`} title={props.pageContext.next.slug}>
									<Button type="primary">Go to Previous Post</Button>
								</Link>
							)}
							{props.pageContext.previous && props.pageContext.previous.slug && (
								<Link to={`/${props.pageContext.previous.categories[0].slug}/${moment(props.pageContext.previous.date).format('YYYY')}/${moment(props.pageContext.previous.date).format('MM')}/${props.pageContext.previous.slug}`} title={props.pageContext.previous.slug}>
									<Button type="primary">Go to Next Post</Button>
								</Link>
							)}
						</div>
					</article>
					<Disqus config={disqusConfig}
				/>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<TagCloud/>
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
