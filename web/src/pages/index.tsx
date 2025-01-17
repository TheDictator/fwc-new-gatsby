import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RecentPosts from '../components/Posts/recent-posts';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import '../styles/blog.scss';
import {
    DocumentReportIcon,
    ChartBarIcon,
    OfficeBuildingIcon,
    PencilAltIcon,
    PlusIcon,
} from '@heroicons/react/outline'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import TestimonialSlider from "../components/Ui/TestimonialSlider"

const features = [
    {
        name: "Suite Commerce",
        description:
        "NetSuite's flagship ecommerce product. Lots of good features, tightly integrated with the back end, and expensive.",
        icon: PencilAltIcon,
    },
    {
        name: "Site Builder",
        description:
        "If you have invested a great deal in Site Builder, we can help you maximize your conversion rate, SEO, and performance.",
        icon: PencilAltIcon,
    },
    {
        name: "Shopify",
        description:
            "Your customers' data will be safe and secure.",
        icon: OfficeBuildingIcon,
    },
    {
        name: "SEO",
        description:
            "Whatever platform your site is on, we can help you get more search engine traffic. Start with our in-depth SEO audit to identify areas to improve, or we can work with you on copy writing, link building, and other tactics.",
        icon: PlusIcon,
    },
    {
        name: "Third-Party Integrations",
        description:
            "NetSuite has many ways to connect your account with other systems. Stop hacking together spreadsheets and bring it all together!",
        icon: ChartBarIcon,
    },
    {
        name: "Accounting",
        description:
            "Get the most out of NetSuite's accounting features. From automated bank reconciliation to sales taxes to multi-book complexity, we can help.",
        icon: DocumentReportIcon,
    }
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
    location: Location

}

export const IndexPage = (props: Props) => {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }
    return (
        <Layout location={props.location}>
            <SEO title="Home" />
            <main>
                {/* Hero section */}
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="relative shadow-xl w-full sm:rounded-2xl sm:rounded-t-none sm:overflow-hidden">
                            <div className="absolute inset-0">
                                <StaticImage
                                    className="h-full w-full object-cover"
                                    src="../images/help.jpg"
                                    alt="People working on laptops"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700"
                                    style={{ mixBlendMode: "multiply" }}
                                />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">
                                        Netsuite can be tricky
                                    </span>
                                    <span className="block text-blue-200">
                                        We're here to help
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                                    With over 35 years of combined Netsuite
                                    consulting experience, FourthWave Consulting
                                    can assist you in solving your technical
                                    debt woes when it comes to Netsuite and
                                    SuiteCommerce products.
                                </p>
                                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                        <AnchorLink 
                                        to="#getStarted" 
                                        title="Check out our team!"
                                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 hover:text-blue-700 sm:px-8 shadow-lg"
                                        >
                                            Get Started
                                        </AnchorLink>
                                        <Link
                                            to="/services"
                                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 hover:text-white sm:px-8"
                                        >
                                            Our Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Logo cloud */}
                <div className="logo-cloud bg-gray-100">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                            We trust our{" "}
                            <span className="text-blue-500 font-extrabold">
                                20+ years
                            </span>{" "}
                            of Netsuite experience with some of these products
                        </p>
                        <div className="mt-9 grid grid-cols-2 gap-8 md:grid-cols-8 lg:grid-cols-4 text-center">
                            <Link
                                to="/services/netsuite"
                                className="col-span-1 flex flex-column items-center justify-between md:col-span-2 lg:col-span-1 logo-column"
                            >
                                <StaticImage className="mx-auto" src="../images/netsuite.svg" alt="Netsuite" placeholder="blurred" layout="fixed" width={64} height={64}/>
                                <span className="text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                    Netsuite
                                </span>
                            </Link>
                                <Link
                                to="/services/suitecommerce"
                                className="col-span-1 flex flex-column items-center justify-between md:col-span-2 lg:col-span-1 logo-column"
                            >
                                <StaticImage className="mx-auto" src="../images/oracle-corporation-logo.svg" alt="SuiteCommerce" placeholder="blurred" width={75} />
                                <span className="text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                    SuiteCommerce
                                </span>
                            </Link>
                            <Link
                                to="/services/seo"
                                className="col-span-1 flex flex-column items-center justify-between md:col-span-2 lg:col-span-1 logo-column"
                            >
                                <StaticImage className="mx-auto" src="../images/google-analytics.svg" alt="Google Analytics" placeholder="blurred" width={64} />
                                <span className="text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                    Google Analytics
                                </span>
                            </Link>
                                
                            <Link
                                to="/services/shopify"
                                className="col-span-1 flex flex-column items-center justify-between md:col-span-2 lg:col-span-1 logo-column"
                            >
                                <StaticImage className="mx-auto" src="../images/shopify.svg" alt="Shopify" placeholder="blurred" width={68} />
                                <span className="text-sm font-semibold uppercase text-gray-500 tracking-wide mt-1">
                                    Shopify
                                </span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
        
                <div id="getStarted">

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
                                    SuiteCommerce
                                </p>
                                <p className="mt-3 text-lg text-gray-300">
                                    NetSuite's flagship ecommerce product. Lots of good features, tightly integrated with the back end, and expensive. 
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
                                    Site Builder
                                </p>
                                <p className="mt-3 text-lg text-gray-300">
                                    Don't fix what isn't broken. Projects have run
                                    the gamut from developing a new website from
                                    scratch, fixing SEO penalties or other search
                                    engine optimization, integrations with 3rd
                                    parties, custom Ajax solutions, and converting
                                    existing sites into device friendly responsive
                                    design.
                                </p>
                                <p className="mt-3 text-lg text-gray-300">
                                    If you have invested a great deal in Site Builder, we can help you maximize your conversion rate, SEO, and performance. 
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
                    
                    {/* Shopify Section */}
                    <div className="relative bg-gray-900">
                        <div className="relative h-56 bg-blue-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                            <StaticImage
                                className="w-full h-full object-cover"
                                src="../images/shopify-service.jpg"
                                alt="Shopify"
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
                                    eCommerce / Shopify
                                </h2>
                                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                                    Shopify
                                </p>
                                <p className="mt-3 text-lg text-gray-300 whitespace-pre-line">
                                    Shopify is the widest used eCommerce solution in the world today. 
                                    Take advantage of wide-spread adoption and combine it with our expertise of stand-alone Shopify web stores, Shopify / Netsuite hybrid solutions, and headless store fronts. 
                                    We have experience connecting connecting your favorite Static Site Generators such as GatsbyJS &amp; NextJS.
                                </p>
                                <div className="mt-8">
                                    <div className="inline-flex rounded-md shadow">
                                        <Link
                                            to="/services/shopify"
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
                </div>
                
                <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
                                From The Blog
                            </h2>
                            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                                See what we've been working on and the stay
                                up-to-date on anything and everything NetSuite.
                            </p>
                        </div>
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            <RecentPosts />
                        </div>
                    </div>
                </div>

                {/* Gradient Feature Section */}
                <div className="bg-gradient-to-r from-blue-800 to-blue-700">
                    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white tracking-tight">
                            Technical Solutions Crafted From Expertise
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg text-blue-200">
                            With over 20 years' of combined experience with
                            NetSuite, we can solution just about anything a SMB
                            can throw at me.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <h3 className="text-xl font-medium text-white">
                                        {feature.name}
                                    </h3>
                                    <p className="mt-2 text-base text-blue-200">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 pt-4">
                            <Link
                                to="/services/shopify"
                            >
                                <h3 className="text-2xl font-medium text-gray-300 hover:text-white">
                                    View More Solutions 
                                </h3>
                                
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Testimonial Callout */}
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
                                                All About{" "}
                                                <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                                                    Your
                                                </span>{" "}
                                                Business
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500">
                                                We try not to sell you on a particular but rather do what is best for your business and the solution that is most effective.
                                            </p>
                                            <div className="mt-6">
                                                <Link
                                                    to="/testimonials"
                                                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 hover:text-white"
                                                >
                                                    Read Testimonials
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
                {/* Stats section */}
                <div className="relative bg-gray-900">
                    <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                        <div className="h-full w-full xl:grid xl:grid-cols-2">
                            <div className="h-full xl:relative xl:col-start-2">
                                <StaticImage
                                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                    src="../images/business-bg.jpeg"
                                    alt="People working on laptops"
                                    placeholder="blurred"
                                    aspectRatio={16/9}
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
                                    Valuable Partnership
                                </span>
                            </h2>
                            <p className="mt-3 text-3xl font-extrabold text-white">
                                Get More Than Just Code
                            </p>
                            <p className="mt-5 text-lg text-gray-300">
                                Receive a life-long business partner and a tool that can be used by anyone. Whether you're a web assistant, CEO, developer or eCommerce expert - we cater to <strong>you</strong> and assure everyone is on the same page.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default IndexPage
