import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import PostCategories from "../components/Posts/categories"

import { Card, Tag, Row, Col, Icon, Button } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import TagCloud from '../components/TagCloud';
import PostCards from "../components/Posts/cards";

import { Post, CategoryTagInfo } from '../contracts/post';
import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';
const moment = require('moment');

import '../styles/blog.scss';

export interface Props {
	pageContext: {
		group: { wpPost: wpPost }[];
		slug: string;
		uri: string;
		title: string;
	};
	location: Location;
}

export const BlogCategoryPostsPage = (props: Props) => {
	const { group } = props.pageContext;
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
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl m-0">Browsing By Category: <span className="bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent">{capitalizeFirstLetter(props.pageContext.slug)}</span></h1>
				</div>
			</div>
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="posts mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none xl:grid-cols-3">
						<PostCards posts={group} />
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<TagCloud />
				</Col>
			</Row>
		</Layout>
	);
};

export default BlogCategoryPostsPage;
