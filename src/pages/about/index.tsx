import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Row, Col, Icon } from 'antd';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';



import { ChildImageSharp } from '../../contracts/post';

import '../../styles/blog.scss';

export interface Props {
	data: {
		file: ChildImageSharp;
	};
	location: Location;
}

export const AboutPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
	return (
		<Layout location={props.location}>
			<SEO title="About FourthWave Consulting" />
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="about">
						<Card bordered={false}>
							<Row gutter={24} type="flex" align="middle">
								<Col xs={24} sm={24} md={24} lg={12} xl={14} xxl={16}>
									{(fluid && fluid.src && fluid.src.length > 0) && (
										<Image fluid={fluid} alt="Author Bio" title="Author Bio" data-pin-nopin="true" />
									)}
								</Col>
								<Col xs={24} sm={24} md={24} lg={12} xl={10} xxl={8}>
									<div className="description-wrapper">
										<h2 className="text-uppercase">FourthWave</h2>
										<p className="text-bold text-uppercase">Netsuite &amp; E-Commerce Expertise</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										<div className="description">
											<p className="margin-bottom-12px">
												<span className="icon"><Icon type="calendar" /></span>
												<span className="label">31st December, 1992</span>
											</p>
											<p className="margin-bottom-12px">
												<span className="icon"><Icon type="phone" /></span>
												<span className="label">44 (012) 6954 783</span>
											</p>
											<p className="margin-bottom-12px">
												<span className="icon"><Icon type="mail" /></span>
												<span className="label">john@doe</span>
											</p>
											<p>
												<span className="icon"><Icon type="pushpin" /></span>
												<span className="label">Santa Monica Boulevard</span>
											</p>
										</div>
									</div>
								</Col>
							</Row>
							<Row>
								<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
									<div className="introduction-wrapper">
										<div className="introduction">
											<h3>About FourthWave</h3>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
											
										</div>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
				<h3>Tag Cloud</h3>
				</Col>
			</Row>
		</Layout>
	);
};

export default AboutPage;

export const query = graphql`
  	query {
    	file(relativePath: { eq: "author.jpg" }) {
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
`;
