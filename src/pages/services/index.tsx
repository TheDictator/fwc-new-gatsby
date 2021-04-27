import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import {
	BookmarkAltIcon,
	BriefcaseIcon,
	ChartBarIcon,
	CheckCircleIcon,
	CursorClickIcon,
	DesktopComputerIcon,
	GlobeAltIcon,
	InformationCircleIcon,
	MenuIcon,
	NewspaperIcon,
	OfficeBuildingIcon,
	PhoneIcon,
	PlayIcon,
	ReplyIcon,
	ShieldCheckIcon,
	UserGroupIcon,
	ViewGridIcon,
	XIcon,
  } from '@heroicons/react/outline'

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import { ChildImageSharp } from '../../contracts/post';

import '../../styles/blog.scss';
const services = [
	{
	  name: 'Sitebuilder',
	  description: 'Get a better understanding of where your traffic is coming from.',
	  href: '/services/sitebuilder',
	  icon: ChartBarIcon,
	},
	{
	  name: 'SuiteCommerce',
	  description: 'Speak directly to your customers in a more meaningful way.',
	  href: '/services/suite-commerce',
	  icon: CursorClickIcon,
	},
	{ name: 'SC Advanced', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
	{
	  name: 'NS Migrations',
	  description: "Connect with third-party tools that you're already using.",
	  href: '/services/migrations',
	  icon: ReplyIcon,
	},
  ]
export interface Props {
	data: {
		file: ChildImageSharp;
	};
	location: Location;
}

export const ServicesPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			
			<SEO title="Our Services" />
			<div className="relative bg-white py-16 sm:py-24 lg:py-32">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<h1 className="text-base font-semibold tracking-wider text-blue-600 uppercase">Our Services</h1>
					<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
					Everything we offer is covered below
					</p>
					<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
					Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
					malesuada. Eleifend condimentum id viverra nulla.
					</p>
					<div className="mt-12">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((feature) => (
						<div key={feature.name} className="pt-6">
							<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
							<div className="-mt-6">
								<div>
								<span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
									<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
								</span>
								</div>
								<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
								<p className="mt-5 text-base text-gray-500">
								Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
								</p>
							</div>
							</div>
						</div>
						))}
					</div>
					</div>
      			</div>
    	</div>
				
		</Layout>
	);
};

export default ServicesPage;

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
