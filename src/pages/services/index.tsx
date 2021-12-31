import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby';
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import '../../styles/blog.scss';
const faqs = [
	{
	  id: 1,
	  question: "What are the advantages of building a website on SuiteCommerce?",
	  answer:
		"I don't know, but the system isr ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 2,
		question: "Do you do website audits?",
		answer:
		  "I don't know, but the system isr ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	  },
	  {
		id: 3,
		question: "What are the disadvantages of building a website on SuiteCommerce?",
		answer:
		  "I don't know, but the system isr ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	  },
	  {
		id: 5,
		question: "How long do site migrations typically take?",
		answer:
		  "I don't know, but the system isr ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	  },
	  {
		id: 6,
		question: "Do you offer website migration services?",
		answer:
		  "I don't know, but the system isr ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	  },
	// More questions...
]
export interface Props {
	data: {
		image: Image;
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
      			</div>
			</div>
			
			<div className="bg-blue-700">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
					<div className="mt-6 border-t border-blue-300 border-opacity-25 pt-10">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
						{faqs.map((faq) => (
						<div key={faq.id}>
							<dt className="text-lg leading-6 font-medium text-white">{faq.question}</dt>
							<dd className="mt-2 text-base text-blue-200">{faq.answer}</dd>
						</div>
						))}
					</dl>
					</div>
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
					<a
						href="#"
						className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
					>
						Learn more
					</a>
					<a
						href="#"
						className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-blue-50 hover:bg-blue-100"
					>
						Contact
					</a>
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
		allWpPost(filter: {status: {eq: "publish"}}, limit: 3) {
			edges {
				node {
				  id
				  slug
				  title
				  excerpt
				  date(formatString: "MMMM DD, YYYY")
				  modified(formatString: "MMMM DD, YYYY")
				  author {
					node {
					  id
					  name
					  url
					  slug
					}
				  }
				  featuredImage {
					node {
					  localFile {
						childImageSharp {
							gatsbyImageData (
								width: 800
								placeholder: BLURRED
								formats: [AUTO, WEBP, AVIF]
							  )
						}
					  }
					}
				  }
				  categories {
					nodes {
					  id
					  count
					  name
					  slug
					}
				  }
				  tags {
					nodes {
					  id
					  count
					  name
					  slug
					}
				  }
				}
			  }
		}
  	}
`;
