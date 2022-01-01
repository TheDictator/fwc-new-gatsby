import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../styles/blog.scss"
import Cta from "../components/Ui/Cta"

const encode = (data) =>
    Object.keys(data)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&")

export const ContactPage = (props: Props) => {
    return (
        <Layout location={props.location}>
            <SEO title="Contact Us" />
            <div className="bg-white pb-24">
                {/* Header */}
                <div className="py-24 bg-gray-50 sm:py-24">
                    <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                            Let's get started
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
                            We'd love to hear from you! Send us a message using
                            the form, or email us. 
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="relative bg-white">
                    <div className="max-w-3xl mx-auto px-4 lg:px-0">
                        <form
                            name="contact"
                            method="POST"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                            className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        >
                            <noscript>
                                <p>
                                    This form won't work with Javascript
                                    disabled
                                </p>
                            </noscript>
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                <label
                                    htmlFor="last_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <span
                                        id="phone_description"
                                        className="text-sm text-gray-500"
                                    >
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

                            <div className="sm:col-span-2">
                                <div className="flex justify-between">
                                    <label
                                        htmlFor="how_can_we_help"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <span
                                        id="how_can_we_help_description"
                                        className="text-sm text-gray-500"
                                    >
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
                                        defaultValue={""}
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
            <Cta
                headline="Ready to solve your woes?"
                description="Contact Us. The first hour is free."
            />
        </Layout>
    )
}

export default ContactPage
