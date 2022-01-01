import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import '../../styles/blog.scss';
import Cta from "../../components/Ui/Cta"

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
]
export interface Props {
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
			<Cta
                headline="Ready to solve your woes?"
                description="Contact Us. The first hour is free."
            />
		</Layout>
	);
};

export default ServicesPage;
