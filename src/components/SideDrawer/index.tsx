import React, { useState, } from "react";
import { graphql, navigate } from 'gatsby';
import { Drawer } from 'antd';
import Layout from '../Layout';

const encode = (data) => Object.keys(data)
.map((key) =>
    `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
.join("&");

export const ContactPage = (props: Props) => {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };

	return (
		<Layout location={props.location}>
			<Drawer
                width={500}
                placement="right"
                closable={true}
                onClose={onClose}
                >
                <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <form 
                name="contact" 
                method="POST" 
                netlify-honeypot="bot-field" data-netlify="true"
                
                className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <noscript>
                    <p>This form won’t work with Javascript disabled</p>
                  </noscript>
                <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      First name *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
						            required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last name *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
						            required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
						            required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <span id="phone_description" className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone_description"
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
				  <fieldset className="sm:col-span-2">
					  <div className="flex justify-between">
					  <legend className="block text-sm font-medium text-gray-700">Expected budget (<em>if applicable</em>)</legend>
					  <span id="how_can_we_help_description" className="text-sm text-gray-500">
                        Optional
                      </span>
					  </div>
                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id="budget_under_25k"
                          name="budget"
                          defaultValue="under_25k"
                          type="radio"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor="budget_under_25k" className="ml-3">
                          <span className="block text-sm text-gray-700">Less than $25K</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget_25k-50k"
                          name="budget"
                          defaultValue="25k-50k"
                          type="radio"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor="budget_25k-50k" className="ml-3">
                          <span className="block text-sm text-gray-700">$25K – $50K</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget_50k-100k"
                          name="budget"
                          defaultValue="50k-100k"
                          type="radio"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor="budget_50k-100k" className="ml-3">
                          <span className="block text-sm text-gray-700">$50K – $100K</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget_over_100k"
                          name="budget"
                          defaultValue="over_100k"
                          type="radio"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor="budget_over_100k" className="ml-3">
                          <span className="block text-sm text-gray-700">$100K+</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <span id="how_can_we_help_description" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how_can_we_help"
                        name="how_can_we_help"
                        aria-describedby="how_can_we_help_description"
                        rows={4}
                        className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        defaultValue={''}
                        required
                      />
                    </div>
                  </div>

                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="block w-full justify-center py-4 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
            </Drawer>				
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
