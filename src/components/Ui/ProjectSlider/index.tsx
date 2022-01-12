import React, { FC, useRef, useState } from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ExternalLinkIcon } from '@heroicons/react/solid';

interface SliderProps {
    className?: string
    headline?: string
    description?: string
    sliderItems?: {
        sliderText: string
        sliderAuthor: string
    }[]
}

const ProjectSlider: FC<SliderProps> = ({ headline, description }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const slider1 = useRef<any>(null)

    function afterChangeHandler(currentSlide: number) {
        setSlideIndex(currentSlide)
    }

    function next() {
        slider1.current.slickNext()
    }

    function previous() {
        slider1.current.slickPrev()
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: "30px",
        adapativeHeight: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <>
            <div className="bg-gradient-to-r from-blue-800 to-blue-700">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 relative">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight text-center">
                        Recent Fixed-Price Projects
                    </h2>
                    <h3 className="text-3xl font-extrabold text-white tracking-tight text-center">
                        {slideIndex + 1}/3
                    </h3>
                    <div className="slider-pagination">
                            <button className="prev" onClick={previous}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            <button className="next" onClick={next}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                </div>
                <div className="featured-slider">
                    <div className="slider-container">
                        
                        <div className="sliderContainer py-12">
                            <Slider
                                {...settings}
                                ref={slider1}
                                className="slider"
                                afterChange={afterChangeHandler}
                            >
                            <div className="slide-card">
                                <div className="card projectCard flex flex-col rounded-lg shadow-lg">
                                    <div className="flex-shrink-0">
                                        <StaticImage
                                            className="w-full h-full object-cover"
                                            src="../../../images/strike-example.jpg"
                                            alt="Cross-sell Items in Netsuite"
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="flex-1 bg-white p-6 pt-0 flex flex-col justify-between">
                                        <div className="flex-1 categories-container mt-4">
                                            <Link
                                                to={`https://www.strike.com.au/strike-alpha-apple-iphone-12-car-mount_3`}
                                                rel="category tag"
                                                className="inline-block"
                                                title="Strike Example"
                                                target="_blank"
                                            >
                                                <span className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                    Live Example 1
                                                    <ExternalLinkIcon
                                                        className="-mr-1 ml-1 h-4 w-4 text-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Link>
                                            <Link
                                                to={`https://www.ohmyarthritis.com/Shop-Splints/Thumb-Splints/Fix-Comfort-Thumb-Brace.html`}
                                                rel="category tag"
                                                className="inline-block"
                                                title="OMA Example"
                                                target="_blank"
                                            >
                                                <span className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                    Live Example 2
                                                    <ExternalLinkIcon
                                                        className="-mr-1 ml-1 h-4 w-4 text-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Link>
                                            <p className="text-xl font-semibold text-black-400 title">
                                                Upsell &amp; cross-sell featured
                                                items for Site Builder
                                            </p>
                                            <p>
                                                Increasing your average order
                                                value (AOV) is one of the best
                                                improvements you can make to a
                                                website. The profit margin on
                                                the increase is much higher than
                                                on the rest of the order,
                                                especially if you offer free or
                                                discounted shipping. Our custom
                                                solution can use manually
                                                selected or automatically
                                                determined lists of items to
                                                show on the product page or
                                                shopping cart, showing relevant
                                                accessories or complementary
                                                products.
                                            </p>
                                            <div className="mt-8">
                                                <div className="inline-flex rounded-md shadow">
                                                    <Link
                                                        to={
                                                        "/e-commerce/2020/09/increase-revenue-with-upsells-and-cross-sells.html"
                                                        }
                                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gray-900 text-white bg-white hover:bg-gray-600"
                                                    >
                                                        Read More
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-card">
                                <div className="card projectCard flex flex-col rounded-lg shadow-lg">
                                    <div className="flex-shrink-0">
                                        <StaticImage
                                            className="w-full h-full object-cover"
                                            src="../../../images/ss-example.jpg"
                                            alt="Cross-sell Items in Netsuite"
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="flex-1 bg-white p-6 pt-0 flex flex-col justify-between">
                                        <div className="flex-1 categories-container mt-4">
                                            <Link
                                                to={`https://www.seedsavers.org/catalog`}
                                                rel="category tag"
                                                className="inline-block"
                                                title="Seed Savers Example"
                                                target="_blank"
                                            >
                                                <span className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                    Live Example 1
                                                    <ExternalLinkIcon
                                                        className="-mr-1 ml-1 h-4 w-4 text-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Link>
                                            <Link
                                                to={`https://www.allendisplay.com/Contact-Us `}
                                                rel="category tag"
                                                className="inline-block"
                                                title="Allen Display Example"
                                                target="_blank"
                                            >
                                                <span className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                    Live Example 2
                                                    <ExternalLinkIcon
                                                        className="-mr-1 ml-1 h-4 w-4 text-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Link>

                                            <p className="text-xl font-semibold text-black-400 title">
                                                Google recaptcha for online
                                                forms like contact us
                                            </p>
                                            <p>
                                                If your site is popular enough,
                                                the bots will find your forms
                                                and spam you like the day is
                                                long. Protect yourself with
                                                industry-leading Google Captcha
                                                v3 integration. Gone are the
                                                days of annoying 'click all the
                                                boxes with a stoplight' puzzles
                                                - most users are silently
                                                verified and don't have to do
                                                anything.
                                            </p>
                                            <div className="mt-8">
                                                <div className="inline-flex rounded-md shadow">
                                                    <Link
                                                        to={
                                                            "/e-commerce/2019/10/google-recaptcha-online-forms.html"
                                                        }
                                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gray-900 text-white bg-white hover:bg-gray-600"
                                                    >
                                                        Read More
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-card">
                                <div className="card projectCard flex flex-col rounded-lg shadow-lg">
                                    <div className="flex-shrink-0">
                                        <StaticImage
                                            className="w-full h-full object-cover"
                                            src="../../../images/sb-service.jpeg"
                                            alt="Cross-sell Items in Netsuite"
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <div className="flex-1 bg-white p-6 pt-0 flex flex-col justify-between">
                                        <div className="flex-1 categories-container mt-4">
                                            <Link
                                                to={`https://www.seedsavers.org/catalog`}
                                                rel="category tag"
                                                className="inline-block"
                                                title="OMA Example"
                                                target="_blank"
                                            >
                                                <span className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                    Live Example 1
                                                    <ExternalLinkIcon
                                                        className="-mr-1 ml-1 h-4 w-4 text-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Link>
                                            <Link
                                                to={`https://www.allendisplay.com/Contact-Us `}
                                                rel="category tag"
                                                className="inline-block"
                                                title="Allen Display Example"
                                                target="_blank"
                                            >
                                                <span className="bg-gray-600 text-white inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold mb-1 mr-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                                    Live Example 2
                                                    <ExternalLinkIcon
                                                        className="-mr-1 ml-1 h-4 w-4 text-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Link>

                                            <p className="text-xl font-semibold text-black-400 title">
                                                Site builder performance
                                                optimization
                                            </p>
                                            <p>
                                                We have been working with Site
                                                Builder since 2004. Companies
                                                who use it have invested a great
                                                deal in their website, and
                                                shouldn't just drop it for
                                                another platform lightly. We can
                                                help you get the most out of it
                                                for years to come.
                                            </p>
                                            <div>
                                               <p> Here are some of the ways we can optimize your Site Builder site:</p>
                                                <ul>
                                                    <li><strong>Responsive conversion:</strong> Convert the built-in templates to a fluid, responsive design that looks great on all devices - desktop, tablet, and mobile. </li>
                                                    <li><strong>CDN integration:</strong> Boost page load times around the world by integrating a low-cost content delivery network (CDN). Don't be held back by slow Site Builder servers, cache up to 75% of your bandwidth at the edge!</li>
                                                    <li><strong>Code optimization:</strong> Using our many years of web development experience, we can speed your site for all users by combining, delaying, or optimizing the scripting for your site's functionality and 3rd party connections. </li>
                                                </ul>
                                            </div>
                                            <div className="mt-8">
                                                <div className="inline-flex rounded-md shadow">
                                                    <Link
                                                        to={
                                                            "/e-commerce/2020/07/site-builder-performance-upgrades.html"
                                                        }
                                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gray-900 text-white bg-white hover:bg-gray-600"
                                                    >
                                                        Read More
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSlider
