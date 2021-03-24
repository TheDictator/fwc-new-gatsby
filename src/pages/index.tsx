import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Twitter from '../components/Twitter';
import Facebook from '../components/Facebook';

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
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="home">
						<Card>
							<Row gutter={24} type="flex" align="middle">
								<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
									<h1>FourthWave Consulting</h1>
									{(fluid && fluid.src && fluid.src.length > 0) && (
										<Image fluid={fluid} alt="Home screen banner" title="Home screen banner" />
									)}
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
									<div className="features-wrapper margin-top-36px">
										<div className="features">
											<h3>Welcome</h3>
											
										</div>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<Twitter title={<h3 className="margin-bottom-36px">Twitter</h3>} />
					<Facebook title={
						<h3 className="margin-top-36px margin-bottom-36px">Facebook</h3>
					} />
					
				</Col>
			</Row>
			
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  	query {
    	file(relativePath: { eq: "banner.jpg" }) {
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
