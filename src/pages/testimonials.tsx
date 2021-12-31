import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
export interface Props {
	location: Location;
}

export const ServicesPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			<SEO title="Our Services" />
			<div className="relative bg-white py-16 sm:py-24 lg:py-32">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<h1 className="text-base font-semibold tracking-wider text-blue-600 uppercase">About Us</h1>
					<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
						Testimonials
					</p>
					<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Read raving reviews from our vast customer base. Our retention rate is near perfect for a reason.
					</p>
      			</div>
			</div>			
			{/* CTA Section */}
			<div className="bg-gray-900">
				<div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
					<h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					<span className="block text-white">Ready to solve your woes?</span>
					<span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
						Contact Us. The first hour is free.
					</span>
					</h2>
					<div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
					<Link
						to="/services"
						className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
					>
						Learn more
					</Link>
					<Link
						to="/contact-fourth-wave-consulting"
						className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-blue-50 hover:bg-blue-100"
					>
						Contact
					</Link>
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
