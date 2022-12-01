import React, { FC } from "react"
import { Link } from "gatsby"

interface SliderProps {
    className?: string
    headline?: string
    description?: string
}

const Cta: FC<SliderProps> = ({ headline, description }) => {
    return (
        <div className="bg-gray-900">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-white">
                        { headline }
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                        { description }
                    </span>
                </h2>
                <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                    <Link
                        to="/services"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                    >
                        Learn more
                    </Link>
                    <Link
                        to="/contact-fourth-wave-consulting"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-blue-50 hover:bg-blue-100"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cta
