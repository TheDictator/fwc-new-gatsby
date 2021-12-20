import React from 'react';

import { graphql } from 'gatsby';

import './Header.scss';

import { ChildImageSharp } from '../../contracts/post';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { StaticImage } from "gatsby-plugin-image"

const services = [
  {
    name: 'SuiteCommerce',
    description: 'NetSuite\'s flagship ecommerce product. Lots of good features, tightly integrated with the back end, and expensive.',
    href: '/services/suite-commerce',
    icon: ChartBarIcon,
  },
  {
    name: 'Site Builder',
    description: 'If you have invested a great deal in Site Builder, we can help you maximize your conversion rate, SEO, and performance.',
    href: '/services/sitebuilder',
    icon: CursorClickIcon,
  },
  { name: 'Shopify', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
]
const callsToAction = [
  { name: 'View All Services', href: '/services', icon: CheckCircleIcon },
  { name: 'Contact Us', href: '/contact-fourth-wave-consulting', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '/about', icon: InformationCircleIcon },
  { name: 'Our Work', href: '/work', icon: OfficeBuildingIcon },
  { name: 'Privacy Policy', href: '/privacy-policy', icon: ShieldCheckIcon },
  { name: 'Demos', href: '/demos', icon: DesktopComputerIcon },
]
const resources = [
  { name: 'Blog', href: '/blog', icon: GlobeAltIcon },
  { name: 'Updates', href: '/updates', icon: UserGroupIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'How to Increase eCommerce Revenue With Upsells and Cross-sells: Cart and Product Detail Page',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'Netsuite 2020.2 Update: Data-center URL deprecation + What You Need To Know',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export interface Props {
	data: {
		file: ChildImageSharp;
	};
	location: Location;
}
export const Header = (props: Props) => {
  
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
          <div className="relative z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <a href="/" className="flex">
                  <span className="sr-only">FourthWave Consulting</span>
                  <StaticImage src="../../images/fwc_header.png" alt="FourthWave Consulting" width={400} />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <Popover.Group as="nav" className="flex space-x-10">
                  <Popover>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-black' : 'text-black',
                            'group bg-white rounded-md inline-flex items-center text-lg font-bold hover:text-gray-900'
                          )}
                        >
                          <span>NetSuite Services</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-black' : 'text-black',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white max-w-7xl mx-auto "
                          >
                            <div className="grid grid-cols-2">
                              <div>
                                <div className="px-8 pt-4">
                                  <h2>E-Commerce Solutions</h2>
                                  <p>Your needs are unique. We can help you find the best solution. This is a critical decision with ramifications for years to come, and there are many factors to consider. </p>
                                </div>
                                  
                                  <div className="grid gap-y-6 px-4 py-2 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:px-8 xl:py-4">
                                {services.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex md:h-full lg:flex-col">
                                      <div className="flex-shrink-0">
                                        {/* <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                          <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </span> */}
                                      </div>
                                      <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                        <div>
                                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                                          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                        </div>
                                        <p className="mt-2 text-sm font-medium text-blue-600 lg:mt-4">
                                          Learn more <span aria-hidden="true">&rarr;</span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                            <div className="bg-gray-50">
                              <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-black' : 'text-black',
                            'group bg-white rounded-md inline-flex items-center text-lg font-bold hover:text-gray-900'
                          )}
                        >
                          <span>About Us</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-black' : 'text-black',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg"
                          >
                            <div className="absolute inset-0 flex">
                              <div className="bg-white w-1/2" />
                              <div className="bg-gray-50 w-1/2" />
                            </div>
                            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                              <nav className="grid gap-y-10 px-4 py-8 bg-white sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
                                  <ul className="mt-5 space-y-6">
                                    {company.map((item) => (
                                      <li key={item.name} className="flow-root">
                                        <a
                                          href={item.href}
                                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                        >
                                          
                                          <span className="ml-4">{item.name}</span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                              </nav>
                              <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    From the blog
                                  </h3>
                                  <ul className="mt-6 space-y-6">
                                    {blogPosts.map((post) => (
                                      <li key={post.id} className="flow-root">
                                        <a href={post.href} className="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
                                          <div className="hidden sm:block flex-shrink-0">
                                            <img
                                              className="w-32 h-20 object-cover rounded-md"
                                              src={post.imageUrl}
                                              alt=""
                                            />
                                          </div>
                                          <div className="w-0 flex-1 sm:ml-8">
                                            <h4 className="text-base font-medium text-gray-900 truncate">
                                              {post.name}
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-6 text-sm font-medium">
                                  <a href="/blog" className="text-blue-600 hover:text-blue-500">
                                    {' '}
                                    View all posts <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <div className="flex items-center md:ml-12">
                  <a href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Blog
                  </a>
                  <a
                    href="/contact-fourth-wave-consulting"
                    className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://www.fourthwc.com/wp-content/uploads/2015/06/fwc_header3.png"
                        alt="FourthWave Consulting"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <nav>
                      <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                        {services.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-8 text-base">
                        <a href="/services" className="font-medium text-blue-600 hover:text-blue-500">
                          {' '}
                          View all services <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a href="/about" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      About
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Company
                    </a>

                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Resources
                    </a>

                    <a href="/blog" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Blog
                    </a>

                    <a href="/contact-fourth-wave-consulting" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/contact-fourth-wave-consulting"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Contact Us
                    </a>
                    
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
};

export default Header;

export const query = graphql`
  {
    file(relativePath: { eq: "images/fwc_header.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`