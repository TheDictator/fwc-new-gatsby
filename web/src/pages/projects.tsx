import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectSlider from "../components/Ui/ProjectSlider"
import Cta from "../components/Ui/Cta"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalLinkIcon } from "@heroicons/react/solid"
import TestimonialSlider from "../components/Ui/TestimonialSlider"

export interface Props {
    location: Location
}

export const ProjectsPage = (props: Props) => {
    return (
        <Layout location={props.location}>
            <SEO title="Our Projects" />

            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h1 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                        Projects
                    </h1>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Popular Projects
                    </p>
                    <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        We've done hundreds of NetSuite related projects since
                        2004. Here are some of the most popular. If we've done
                        it before, you benefit from all that experience and can
                        get the same work done cheaper, faster, and with fewer
                        technical surprises.
                    </p>
                </div>
            </div>

            <ProjectSlider />

            <div className="relative py-32 overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
                />
                <div className="relative">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-6 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                        E-commerce for NetSuite Companies
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        NetSuite companies have 3 main choices
                                        for an e-commerce platform.
                                        SuiteCommerce, SuiteCommerce Advanced,
                                        and third-party platforms like Shopify
                                        or Woo Commerce. Most NetSuite
                                        consultants will push their clients into
                                        the SuiteCommerce solutions, but not us.
                                        Our goal is to help you find the best
                                        fit for your needs.
                                    </p>
                                    <div className="mt-6">
                                        <Link
                                            to="/services/netsuite"
                                            className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 hover:text-white"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <TestimonialSlider />
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <StaticImage
                                    className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="../images/review-photo.jpg"
                                    alt="Business reviews"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-gray-900">
                <div className="relative h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/sb-service.jpeg"
                        alt="SuiteCommerce"
                        placeholder="blurred"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                        style={{ mixBlendMode: "multiply" }}
                    />
                </div>
                <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                            eCommerce / NetSuite
                        </h2>
                        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                            We are <span className="text-underline">Not</span>{" "}
                            here to sell you a solution
                        </p>
                        <p className="mt-3 text-lg text-gray-300">
                            Every company's needs are different. Those with
                            smaller revenue and simpler needs might benefit most
                            from a Shopify or other 3rd party storefront
                            connected to NetSuite. SuiteCommerce or SCA will be
                            a good fit for others. We want to work with you to
                            understand your needs and then find the best
                            solution.
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    to="/services/suitecommerce"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                                >
                                    Learn more
                                    <ExternalLinkIcon
                                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suitecommerce Section */}
            <div className="relative bg-gray-900">
                <div className="relative h-56 bg-blue-600 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">
                    <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/sc-service.jpg"
                        alt="Site Builder"
                        placeholder="blurred"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                        style={{ mixBlendMode: "multiply" }}
                    />
                </div>
                <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div className="md:mr-auto md:w-1/2 md:pr-10">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                            eCommerce / NetSuite
                        </h2>
                        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                            SuiteCommerce/SCA site development
                        </p>
                        <p className="mt-3 text-lg text-gray-300">
                            STHS Example.
                        </p>

                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    to="/services"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                                >
                                    Learn more
                                    <ExternalLinkIcon
                                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SiteBuilder Section */}
            <div className="relative bg-gray-900">
                <div className="relative h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <StaticImage
                        className="w-full h-full object-cover"
                        src="../images/sb-service.jpeg"
                        alt="SuiteCommerce"
                        placeholder="blurred"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                        style={{ mixBlendMode: "multiply" }}
                    />
                </div>
                <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                            eCommerce / NetSuite
                        </h2>
                        <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Site Builder optimization
                        </p>
                        <p className="mt-3 text-lg text-gray-300">
                            NetSuite wants companies to move away from site
                            builder, but it's unlikely that they will just shut
                            the platform down without at least a few years
                            notice. In the meantime, we can help you get the
                            most return from your previous investments and site
                            builder, which can drive increased revenues that can
                            then fund and eventual replacement.
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    to="/services/sitebuilder"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                                >
                                    Learn more
                                    <ExternalLinkIcon
                                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative py-32 overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
                />
                <div className="relative">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="pl-4 -ml-48 sm:pl-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <StaticImage
                                    className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="../images/review-photo.jpg"
                                    alt="Business reviews"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-6 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                        Shopfiy and other platforms
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        Shopify and other E-Commerce solutions
                                    </p>
                                    <div className="mt-6">
                                        <Link
                                            to="/services/shopify"
                                            className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 hover:text-white"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6">
                            <p className="relative text-base text-gray-500">
                                Shopify has the ability to act as a headless CMS solution in conjunction with your Netsuite account.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cta
                headline="Ready to solve your woes?"
                description="Contact Us. The first hour is free."
            />
        </Layout>
    )
}

export default ProjectsPage
