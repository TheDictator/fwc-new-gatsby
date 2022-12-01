import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';


import './Footer.scss';
const navigation = {
  services: [
    { name: 'Our Services', href: '/services' },
    { name: 'SiteBuilder', href: '#' },
    { name: 'Reference Checkout', href: '#' },
    { name: 'SuiteCommerce', href: '#' },
    { name: 'SuiteCommerce Advanced', href: '#' },
    { name: 'Internet Marketing', href: '#' },
    { name: 'Shopify Development', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Our Work', href: '/work' }
  ],
  company: [
    { name: 'Contact Us', href: '/contact-fourth-wave-consulting' },
    { name: 'About Us', href: '#' },
    { name: 'Testimonials', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
export const Footer = () => {
  const { file } = useStaticQuery(graphql`
  query {    
    file(relativePath: { eq: "logoShort.png" }) {
      childImageSharp {
        fluid(maxWidth: 32, maxHeight: 32, quality: 100) {
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
	
	return (
		<>
 <div className="bg-white">
    {/* Newsletter Section */}
      <section
          className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:flex lg:items-center"
          aria-labelledby="newsletter-heading"
        >
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold text-blue-gray-900 sm:text-4xl" id="newsletter-heading">
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-blue-gray-500">
              Stay up-to-date on our latest offerings and be the first to learn about anything Netsuite.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-blue-gray-300 shadow-sm placeholder-blue-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Notify me
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-blue-gray-500">
              We care about the protection of your data. Read our{' '}
              <a href="/privacy-policy" className="font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </section>
	  
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div key="Services" className="px-5 py-2">
              <a href="/services" className="text-base text-gray-500 hover:text-white">
                Services
              </a>
            </div>
            <div key="About" className="px-5 py-2">
              <a href="/about" className="text-base text-gray-500 hover:text-white">
                About
              </a>
            </div>
            <div key="Blog" className="px-5 py-2">
              <a href="/blog" className="text-base text-gray-500 hover:text-white">
                Blog
              </a>
            </div>
            <div key="Contact" className="px-5 py-2">
              <a href="/contact-fourth-wave-consulting" className="text-base text-gray-500 hover:text-white">
                Contact
              </a>
            </div>
        </nav>
        {/* <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div> */}
        <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Fourth Wave Consulting, LLC. All rights reserved.</p>
      </div>
    </footer>
 </div>
      
      </>
	);
};

export default Footer;
