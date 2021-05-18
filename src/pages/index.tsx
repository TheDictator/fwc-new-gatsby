import React, { useState } from 'react';

import { StaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { ChildImageSharp } from '../contracts/post';
import RecentPosts from '../components/Posts/recent-posts'
import Help from '../images/help.jpg';
import '../styles/blog.scss';
import {
  CogIcon,
	DocumentReportIcon,
  ChartBarIcon,
	InboxIcon,
  OfficeBuildingIcon,
	PencilAltIcon,
  PlusIcon,
	ReplyIcon,
	SparklesIcon,
  } from '@heroicons/react/outline'
import Business from '../images/business.svg';
  const features = [
	{
	  name: 'Suite Commerce',
	  description: 'Customization, SEO, and Responsive Design Conversions. We have worked with dozens of websites, mostly running site builder or WordPress',
	  icon: PencilAltIcon,
	},
  {
	  name: 'Site Builder',
	  description: 'Implementation and Customization. We have implemented and customized quite a few of these SSP applications by now, including functionality changes, custom analytics modules, and Google trusted stores integrations.',
	  icon: PencilAltIcon,
	},
	{
	  name: 'SEO',
	  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	  icon: OfficeBuildingIcon,
	},
	{
	  name: 'Netsuite Process Optimization',
	  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	  icon: PlusIcon,
	},
	{
	  name: 'Internet Marketing',
	  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	  icon: ChartBarIcon,
	},
	{
	  name: 'Migrations',
	  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	  icon: ReplyIcon,
	},
	{
	  name: 'Shopify Development',
	  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	  icon: DocumentReportIcon,
	},
	{
	  name: 'Custom Web Applications',
	  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
	  icon: CogIcon,
	},
  ]

  // // List of Blog posts per category
  // SuiteCommerce
  // Protect Your Online Forms from Bots & Spam - https://www.fourthwc.com/e-commerce/2019/10/google-recaptcha-online-forms.html

  // Sitebuilder
  // Make Your NetSuite Site Builder Site Secure – HTTPS Throughout - https://www.fourthwc.com/netsuite/2017/05/site-builder-site-secure-https-throughout.html
  // How to Increase eCommerce Revenue With Upsells and Cross-sells: Cart and Product Detail Page - https://www.fourthwc.com/e-commerce/2020/09/increase-revenue-with-upsells-and-cross-sells.html
  // Netsuite 2020.2 Update: Data-center URL deprecation + What You Need To Know - https://www.fourthwc.com/e-commerce/2020/08/netsuite-2020-2-update-data-center-url-deprecation.html
  // Site Builder Performance Upgrades - https://www.fourthwc.com/e-commerce/2020/07/site-builder-performance-upgrades.html
  // An Introduction to NetSuite’s Reference Checkout & My Account Bundles - https://www.fourthwc.com/netsuite/2016/04/reference-checkout.html

  // SEO
  // What to know about schema.org and microdata tagging - https://www.fourthwc.com/netsuite/2019/05/what-to-know-about-schema-org-and-microdata-tagging.html
  // Internet Marketing
  // An Introduction to Automating XML Sitemaps for NetSuite Companies - https://www.fourthwc.com/netsuite/2016/11/xml-sitemaps.html

export interface Props {
	data: {
		file: ChildImageSharp;
	};
	location: Location;
}

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export const IndexPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
  const posts = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'SEO', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'David Norris',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'SiteBuilder', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Kevin Carpenter',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'SuiteCommerce', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'David Norris',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
	return (
		<Layout location={props.location}>
			<SEO title="Home" />
			<main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:rounded-t-none sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={Help}
                  alt="People working on laptops"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Netsuite can be tricky</span>
                  <span className="block text-blue-200">We're here to help</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                  With over 35 years of combined Netsuite consulting experience, FourthWave Consulting can assist you in solving your technical debt woes when it comes to Netsuite and SuiteCommerce products.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="/services"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                     Our services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

        {/* Alternating Feature Sections */}
        <div className="relative pt-32 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      All About <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">Your</span> Business
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                      porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
                      Lectus viverra dui tellus ornare pharetra.
                    </p>
                    <div className="mt-6">
                      <a
                        onClick={showDrawer}
                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div className="relative">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative text-base text-gray-500">
                        &ldquo;Dave and Fourth Wave consulting were an absolute joy to work with.  The whole process was outlined out for us before we started so we knew exactly what to expect.  When it comes to Netsuite website customization at an affordable and fair price... Fourth Wave is your answer!!!&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-base font-medium text-gray-700">
                          Joe Nardi
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={Business}
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Custom Web Applications
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      It doesn't just stop at NetSuite. Our vast developmental knowledge and experience have you covered, regardless of technical debt.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Technical Solutions Crafted From Expertise</h2>
            <p className="mt-4 max-w-3xl text-lg text-blue-200">
            With over 20 years’ of combined experience with NetSuite, we can solution just about anything a SMB can throw at me. 
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <h3 className="text-xl font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-blue-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          
          <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">From The Blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            See what we've been working on and the stay up-to-date on anything and everything NetSuite.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <RecentPosts />
        </div>
      </div>
    </div>

        {/* Stats section */}
        <div className="relative bg-gray-900">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent">
                  Valuable Development
                </span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                Get More Than Just Code
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
                feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet
                lacus nibh integer quis. Eu vulputate diam sit tellus quis at.
              </p>
              
            </div>
          </div>
        </div>

        
      </main>
				
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(limit: 6) {
      edges {
        node {
          id
          slug
          status
          template
          format
          wordpress_id
          title
          excerpt
          date(formatString: "MMMM DD, YYYY")
          modified(formatString: "MMMM DD, YYYY")
          author {
            id
            name
            url
            description
            link
            slug
            path
            wordpress_id
          }
          featured_media {
            localFile {
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
          categories {
            id
            link
            wordpress_id
            count
            description
            name
            slug
            path
          }
          tags {
            id
            link
            wordpress_id
            count
            description
            name
            slug
            path
          }
        }
      }
    }
  }
`