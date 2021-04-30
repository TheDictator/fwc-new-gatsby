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
  import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

import { ChildImageSharp } from '../../contracts/post';

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
		question: "Do you guys do website audits?",
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
		question: "Do you do website migrations?",
		answer:
		  "I don't know, but the system isr ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	  },
	// More questions...
  ]
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
				
				{/* SiteBuilder Section */}
				<div className="relative bg-gray-900">
					<div className="relative h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
					<img
						className="w-full h-full object-cover"
						src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
						alt=""
					/>
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
						style={{ mixBlendMode: 'multiply' }}
					/>
					</div>
					<div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
					<div className="md:ml-auto md:w-1/2 md:pl-10">
						<h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
						Sitebuilder
						</h2>
						<p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Don't fix what is not broken</p>
						<p className="mt-3 text-lg text-gray-300">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
						scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
						tincidunt duis.
						</p>
						<div className="mt-8">
						<div className="inline-flex rounded-md shadow">
							<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
							>
							Learn more
							<ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
							</a>
						</div>
						</div>
					</div>
					</div>
				</div>

				{/* Suitecommerce Section */}
				<div className="relative bg-gray-900">
					<div className="relative h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
					<img
						className="w-full h-full object-cover"
						src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
						alt=""
					/>
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
						style={{ mixBlendMode: 'multiply' }}
					/>
					</div>
					<div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
						<div className="md:ml-auto md:w-1/2 md:pl-10">
						<h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
						SuiteCommerce
						</h2>
						<p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">The step up from SiteBuilder</p>
						<p className="mt-3 text-lg text-gray-300">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
						scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
						tincidunt duis.
						</p>
						<div className="mt-8">
						<div className="inline-flex rounded-md shadow">
							<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
							>
							Learn more
							<ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
							</a>
						</div>
						</div>
					</div>
					</div>
				</div>
				
				<div className="bg-blue-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
        <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-white">{faq.question}</dt>
                <dd className="mt-2 text-base text-indigo-200">{faq.answer}</dd>
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
  	}
`;
