import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Button, Card, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { ChildImageSharp } from '../contracts/post';

import '../styles/blog.scss';

export interface Props {
	data: {
		file: ChildImageSharp;
	};
	location: Location;
}

const iconColor = '#FF5E65';

export const IndexPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
	return (
		<Layout location={props.location}>
			<SEO title="Home" />
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} id="primary" className="content-area">
					<div className="home">
						<Card bordered={false}>
							<Row gutter={24} type="flex" align="middle">
								<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
									<h1>FourthWave Consulting</h1>
									{/* {(fluid && fluid.src && fluid.src.length > 0) && (
										<Image fluid={fluid} alt="Home screen banner" title="Home screen banner" />
									)} */}
								</Col>
							</Row>
						</Card>
						{/* <section className="gray-bg align-center">
							<Button type="primary" htmlType="button">Contact us</Button>
							<Button type="ghost" htmlType="button">View Work</Button>
						</section> */}
					</div>
				</Col>
			</Row>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  	query {
    	file(relativePath: { eq: "banner.png" }) {
      		childImageSharp {
        		fluid(maxWidth: 960, maxHeight: 600, quality: 100) {
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
