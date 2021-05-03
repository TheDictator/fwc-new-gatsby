import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Button, Tag, Row, Col, Icon , List} from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Post, CategoryTagInfo } from '../contracts/post';
import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';
const moment = require('moment');

import '../styles/blog.scss';

import TagCloud from '../components/TagCloud';

export interface Props {
	pathContext: {
		group: { node: Post }[];
		index: number;
		pageCount: number;
	};
	location: Location;
}

export const BlogPostsPage = (props: Props) => {
	const { group, index, pageCount } = props.pathContext;
	const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
	const nextUrl = (index + 1).toString();
	const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
		allWordpressTag {
			edges {
				node {
					count
					name
				}
			}
		}
      }
	`);

	return (
		<Layout location={props.location}>
			<SEO title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`} description={site.siteMetadata.description} />
			<div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div className="absolute inset-0 bg-blue-800" style={{ mixBlendMode: 'multiply' }} aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">The Blog</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
          lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>
	<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
			<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{group.map(({ node }: { node: Post }) => {
						const fluid: FluidObject | null = (node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fluid) ? node.featured_media.localFile.childImageSharp.fluid : null;
						const categories: CategoryTagInfo[] = (node.categories && node.categories.length) > 0 ? node.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
						const tags: CategoryTagInfo[] = (node.tags && node.tags.length) > 0 ? node.tags : new Array<CategoryTagInfo>();
						return (
							  <div key={node.slug} className="card flex flex-col rounded-lg shadow-lg overflow-hidden">
								<div className="flex-shrink-0">
								  <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
							  	</div>
								
								<div className="flex-1 bg-white p-6 flex flex-col justify-between">
									<div className="flex-1">
									{categories && categories.length > 0 && categories.map((category, categoryIndex) => {
											return (
												<a  key={categoryIndex} href={`/category/${category.slug}`} className="inline-block" title={category.name}>
													<span
													className=
														'bg-blue-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold'
													>
													{capitalizeFirstLetter(category.name)}
													</span>
												</a>
											);
										})}
									<a href={`/${node.categories[0].slug}/${moment(node.date).format('YYYY')}/${moment(node.date).format('MM')}/${node.slug}`} className="block mt-2">
										<p className="text-xl font-semibold text-gray-900">{node.title}</p>
										<div className="mt-3 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }}></div>
									</a>
									</div>
									<div className="mt-6 flex items-center">
									<div className="flex-shrink-0">
										<a href={`/${node.categories[0].slug}/${moment(node.date).format('YYYY')}/${moment(node.date).format('MM')}/${node.slug}`}>
										<span className="sr-only">{capitalizeFirstLetter(node.author.name)}</span>
										<img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
										</a>
									</div>
									<div className="ml-3">
										<p className="text-sm font-bold text-gray-900">
										<a className="hover:underline">
										{capitalizeFirstLetter(node.author.name)}
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
			</div>
				<div className="navigation-links">
					{index > 1 && (
						<div className="previous-link">
							<Link to={`/posts/${previousUrl}`} title={`/posts/${previousUrl}`}>
								<Button type="primary">Go to Previous Page</Button>
							</Link>
						</div>
					)}
					{index <= (pageCount - 1) && (
						<div className="next-link">
							<Link to={`/posts/${nextUrl}`} title={`/posts/${nextUrl}`}>
								<Button type="primary">Go to Next Page</Button>
							</Link>
						</div>
					)}
				</div>
				<TagCloud/>
		</Layout>
	);
};

export default BlogPostsPage;
