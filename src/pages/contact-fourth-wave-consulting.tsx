import React from 'react';

import { graphql, navigate } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Row, Col, Button, Form, Input, Radio } from 'antd';
const { TextArea } = Input;

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
					<h1>Contact Us</h1>
					<form
						name={formName}
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						hidden
					>
						<input type="text" name="subject" />
						<input type="text" name="name" />
						<input type="email" name="email" />
						<textarea name="message"></textarea>
					</form>
					<Form name="cf" method="post" onFinish={handleSubmit} layout="vertical">
			{/* This is the hidden field that the netlify-honeypot uses. */}
			<Form.Item
			label="Don't fill this out"
			className={`hidden`}
			style={{ display: `none` }}
			name="bot-field"
			>
			<Input type={`hidden`} />
			</Form.Item>
			<Row justify="space-around">
			<Col xs={24}>
				<Form.Item label="Regarding..." name="subject">
				<Radio.Group value={subject}>
					<Radio.Button value="quote">Quote</Radio.Button>
					<Radio.Button value="services">Services</Radio.Button>
					<Radio.Button value="contact">Contact</Radio.Button>
				</Radio.Group>
				</Form.Item>
			</Col>
			</Row>
			<Row justify="space-between">
			
			<Col xs={24} lg={24}>
				<Form.Item
				label="Name"
				rules={[{ required: true, message: `Please enter your name.` }]}
				name="name"
				>
				<Input placeholder="Name" />
				</Form.Item>

				<Form.Item
				label="Email"
				rules={[
					{
					required: true,
					type: `email`,
					message: `Please enter your email.`
					}
				]}
				name="email"
				>
				<Input placeholder="Your Email" />
				</Form.Item>

				<Form.Item
				label="Message"
				rules={[
					{ required: true, message: `Please enter your message.` }
				]}
				name="message"
				>
				<TextArea placeholder="Your Message" rows={5} />
				</Form.Item>

				<Form.Item>
				<Button type="primary" htmlType="submit" disabled={false}>
					Send Message
				</Button>
				</Form.Item>
			</Col>
			</Row>
		</Form>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
				<h3>Tag Cloud</h3>
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
