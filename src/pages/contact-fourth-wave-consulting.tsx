import React, { useContext, useState, } from "react";

import { graphql, navigate } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import '../styles/blog.scss';
import { ExternalLinkIcon } from '@heroicons/react/solid'


const encode = (data) => Object.keys(data)
    .map((key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

export const ContactPage = (props: Props) => {



	return (
		<Layout location={props.location}>
			<SEO title="Contact Us" />
			
				<div className="min-h-screen bg-white">

        {/* Header */}
        <div className="py-24 bg-gray-50 sm:py-32">
          <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
              Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas fermentum adipiscing risus quam ac
              consectetur mattis turpis tristique.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div
                className="h-56 w-full lg:absolute lg:h-full"
                
              >
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
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's get started</h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear
                  from you! Send us a message using the form opposite, or email us.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-400">
          <div className="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              <span className="block text-white">Looking for more information?</span>
              <span className="block text-blue-900">We’ve got you covered.</span>
            </h2>
            <a
              href="/services"
              className="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-600 hover:bg-blue-50 sm:w-auto"
            >
              <span>Learn More</span>
              <ExternalLinkIcon className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Sign in with</p>

                      <div className="mt-1 grid grid-cols-3 gap-3">
                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with Facebook</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with GitHub</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile-or-email" className="sr-only">
                            Mobile number or email
                          </label>
                          <input
                            type="text"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
                            placeholder="Mobile number or email"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Create your account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              
       
    </div>
				
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
