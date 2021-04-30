import React from 'react';

import { graphql, navigate } from 'gatsby';

import { Row, Col } from 'antd';
import TagCloud from '../components/TagCloud';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import '../styles/blog.scss';

export const ContactPage = (props: Props) => {
	const formName = `contact`;
	const subject = ``;
	const handleSubmit = values => {
		if (values[`bot-field`] === undefined) {
		delete values[`bot-field`];
		}

		fetch(`/`, {
		method: `POST`,
		headers: { "Content-Type": `application/x-www-form-urlencoded` },
		body: encode({
			"form-name": formName,
			...values
		})
		})
		.then(() => showSuccess())
		.catch(error => showError(error));
	};

	const showSuccess = () => {
		// TODO: Show a success message or navigate to a success page.
		console.log(`form submitted successfully`);
		navigate("/thank-you-page-contact-us");
	};

	const showError = error => {
		// TODO: Show an error message to the user
		console.log(`There was an error submitting the form`);
		console.log(error);
	};
	return (
		<Layout location={props.location}>
			<SEO title="Contact Us" />
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Contact Us</h1>
					<form
						name={formName}
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						hidden
					>
						<input type="text" name="name" />
						<input type="email" name="email" />
						<textarea name="message"></textarea>
					</form>
					<form name="cf" method="POST" data-netlify="true" onSubmit={handleSubmit} className="display-flex flex-col my-24">
						<input type="hidden" name="form-name" value="cf" />
						<div>
							<label>Your Name:</label>
							<input type="text" name="name" required className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-white focus:border-blue-400 focus:placeholder-gray-400"/>
						</div>
						<div>
							<label>Your Email:</label>
							<input type="email" name="email" required className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-white focus:border-blue-400 focus:placeholder-gray-400"/>
						</div>
						<div>
							<label>Message:</label>
							<textarea name="message" required className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-white focus:border-blue-400 focus:placeholder-gray-400" />
						</div>
						<button type="submit" className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700">Send</button>
						</form>
				
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<TagCloud/>
				</Col>
			</Row>
		</Layout>
	);
};

export default ContactPage;

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
