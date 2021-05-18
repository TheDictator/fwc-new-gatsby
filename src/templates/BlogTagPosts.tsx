import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Tag, Row, Col, Icon, Button } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const moment = require('moment');
import { Post, CategoryTagInfo } from '../contracts/post';
import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';

import '../styles/blog.scss';
import TagCloud from '../components/TagCloud';

export interface Props {
	pathContext: {
		group: { node: Post }[];
		slug: string;
	};
	location: Location;
}

export const BlogTagPostsPage = (props: Props) => {
	const { group } = props.pathContext;
	const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
	`);
	return (
		<Layout location={props.location}>
			<SEO title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`} description={site.siteMetadata.description} />
			<div className="relative bg-gray-500">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gray-500" style={{ mixBlendMode: 'multiply' }} aria-hidden="true" />
				</div>
				<div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
					<span className="block bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent text-base font-semibold tracking-wide uppercase">Blog</span>
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl m-0">Browsing By Tag: <span className="bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent">{capitalizeFirstLetter(props.pathContext.slug)}</span></h1>
				</div>
			</div>
			<Row gutter={36}>
			<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="posts mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
						{group.map(({ node }: { node: Post }) => {
							
							const fluid: FluidObject | null = (node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fluid) ? node.featured_media.localFile.childImageSharp.fluid : null;
							const categories: CategoryTagInfo[] = (node.categories && node.categories.length) > 0 ? node.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
							const tags: CategoryTagInfo[] = (node.tags && node.tags.length > 0) ? node.tags : new Array<CategoryTagInfo>();
							return (
								<div key={node.id} className="card flex flex-col rounded-lg shadow-lg overflow-hidden">
									<div className="flex-shrink-0">
										{(fluid && fluid.src && fluid.src.length > 0) && (
											<Link to={`/${node.categories[0].slug}/${moment(node.date).format('YYYY')}/${moment(node.date).format('MM')}/${node.slug}.html`} title={node.slug}>
												<Image fluid={fluid} alt={node.title} title={node.title} />
											</Link>
										)}
									</div>
									<div className="flex-1 bg-white p-6 flex flex-col justify-between">
										<div className="flex-1 categories-container">
										{categories && categories.length > 0 && categories.map((category, categoryIndex) => {
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
											<a href={`/${node.categories[0].slug}/${moment(node.date).format('YYYY')}/${moment(node.date).format('MM')}/${node.slug}.html`} className="block mt-2">
												<p className="text-xl font-semibold text-black-400 title">{node.title}</p>
												<p className="mt-3 text-base text-gray-500">{node.description}</p>
											</a>
										</div>
										<div className="mt-6 flex items-center">
											<div className="flex-shrink-0">
												<a href={node.author.href}>
												<span className="sr-only">{node.author.name}</span>
												<img className="h-10 w-10 rounded-full" src={node.author.avatar_urls.wordpress_48} alt="" />
												</a>
											</div>
											<div className="ml-3">
												<p className="text-sm font-bold text-gray-900">
													<a href={node.author.href} className="hover:underline">
														{node.author.name}
													</a>
												</p>
												<div className="flex space-x-1 text-sm text-gray-500">
													<time dateTime={node.date}>{(node.modified && node.modified.length > 0) ? node.modified : node.date}</time>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<TagCloud />
				</Col>
			</Row>
		</Layout>
	);
};

export default BlogTagPostsPage;
