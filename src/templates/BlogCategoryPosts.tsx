import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Tag, Row, Col, Icon, Button } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Post, CategoryTagInfo } from '../contracts/post';
import { decodeHtmlCharCodes, capitalizeFirstLetter } from '../utils';
const moment = require('moment');

import '../styles/blog.scss';

export interface Props {
	pathContext: {
		group: { node: Post }[];
		slug: string;
	};
	location: Location;
}

export const BlogCategoryPostsPage = (props: Props) => {
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
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="posts">
						<h3>Browsing Category Posts: {capitalizeFirstLetter(props.pathContext.slug)}</h3>
						{group.map(({ node }: { node: Post }) => {
							const fluid: FluidObject | null = (node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fluid) ? node.featured_media.localFile.childImageSharp.fluid : null;
							const categories: CategoryTagInfo[] = (node.categories && node.categories.length) > 0 ? node.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
							const tags: CategoryTagInfo[] = (node.tags && node.tags.length > 0) ? node.tags : new Array<CategoryTagInfo>();
							return (
								
								<Card bordered={false} className="post" key={node.slug} hoverable={true}>
									<Link to={`/${node.categories[0].slug}/${moment(node.date).format('YYYY')}/${moment(node.date).format('MM')}/${node.slug}`} title={node.slug}>
									<h2 className="black-color">{decodeHtmlCharCodes(node.title)}</h2>
									</Link>
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
										
										
									</div>
									<div className="author-container">
									<span className="post-meta margin-left-2px">
										<span className="author">{capitalizeFirstLetter(node.author.name)}</span>
										<span className="separator"></span>
										<span className="date">{(node.modified && node.modified.length > 0) ? node.modified : node.date}</span>
									</span>
									</div>
									{(fluid && fluid.src && fluid.src.length > 0) && (
										<Link to={`/${node.categories[0].slug}/${moment(node.date).format('YYYY')}/${moment(node.date).format('MM')}/${node.slug}`} title={node.slug}>
											<Image fluid={fluid} alt={node.title} title={node.title} />
										</Link>
									)}
									<div className="post-excerpt" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }} />
									
									<div className="post-footer">
										<h4>Tagged With:</h4>
									{tags && tags.length > 0 && tags.map((tag, tagIndex) => {
											return (
												<Tag key={tagIndex}>
													<Link to={`/tag/${tag.slug}`} title={tag.name}>
														{capitalizeFirstLetter(tag.name)}
													</Link>
												</Tag>
											);
										})}
									</div>
								</Card>
							);
						})}
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
				<h3>Tag Cloud</h3>
					
				</Col>
			</Row>
		
		</Layout>
	);
};

export default BlogCategoryPostsPage;
