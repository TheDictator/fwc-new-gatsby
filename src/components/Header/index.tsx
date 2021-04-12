import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import { Layout as AntLayout, Menu } from 'antd';

import './Header.scss';
import Image from 'gatsby-image';

export interface Props {
	location: Location;
}

export const Header = (props: Props) => {
	const { logo } = useStaticQuery(graphql`
	query {
    	file(relativePath: { eq: "logo.png" }) {
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
	`);
	const isHomePage = (props.location.pathname === '' || props.location.pathname === '/');
	const isAboutPage = (props.location.pathname === '/about' || props.location.pathname === '/about/');
	const isServicesPage = (props.location.pathname === '/services' || props.location.pathname === '/services/');
	const isContactPage = (props.location.pathname === '/contact-fourth-wave-consulting' || props.location.pathname === '/contact-fourth-wave-consulting/');

	return (
		<div className="header-container">
			<AntLayout.Header className="header">
				<Link to="/" title="Home">
					<Image fluid={logo} alt="FourthWave Consulting" title="FourthWave Consulting" />
				</Link>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={isHomePage ? ['home'] : (isAboutPage ? ['about'] : isServicesPage ? ['services'] : isContactPage ? ['contact'] : ['posts'])}>
					<Menu.Item key="posts"><Link to="/posts" title="Blog">Blog</Link></Menu.Item>
					<Menu.Item key="about"><Link to="/about" title="About">About</Link></Menu.Item>
					<Menu.Item key="services"><Link to="/services" title="Services">Services</Link></Menu.Item>
					<Menu.Item key="contact"><Link to="/contact-fourth-wave-consulting" title="Contact">Contact</Link></Menu.Item>

				</Menu>
			</AntLayout.Header>
		</div>
	);
};

export default Header;
