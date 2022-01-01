import React, { FC, useRef, useState } from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <div className="featured-slider">
            <h3 className="headline">Our Most Popular Projects</h3>
            <div className="slider-container">
                <div className="slider-pagination">
                    <button className="prev" onClick={previous}>
                        Previous
                    </button>
                    {/* {slideIndex + 1}/{sliderItems.length} */}
                    <button className="next" onClick={next}>
                        Next
                    </button>
                </div>
            <div className="sliderContainer py-12">
                <Slider
                        {...settings}
                        ref={slider1}
                        className="slider"
                        afterChange={afterChangeHandler}
                    >
                        <div key="project1" className="slide">
                            <div className="content">
                                <h3>
                                    Upsell &amp; cross-sell featured items for Site
                                    Builder
                                </h3>
                                <p>
                                    Increasing your average order value (AOV) is one
                                    of the best improvements you can make to a
                                    website. The profit margin on the increase is
                                    much higher than on the rest of the order,
                                    especially if you offer free or discounted
                                    shipping. Our custom solution can use manually
                                    selected or automatically determined lists of
                                    items to show on the product page or shopping
                                    cart, showing relevant accessories or
                                    complementary products.
                                </p>
                            </div>
                            <div className="media">
                                <StaticImage
                                    className="w-full h-full object-cover"
                                    src="../images/sb-service.jpeg"
                                    alt="Cross-sell Items in Netsuite"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>
                        <div key="project2" className="slide">
                            <div className="content">
                                <h3>
                                    Google recaptcha for online forms like contact us
                                </h3>
                                <p>
                                    If your site is popular enough, the bots will find your forms and spam you like the day is long. Protect yourself with industry-leading Google Captcha v3 integration. Gone are the days of annoying ‘click all the boxes with a stoplight’ puzzles – most users are silently verified and don’t have to do anything.
                                </p>
                            </div>
                            <div className="media">
                                <StaticImage
                                    className="w-full h-full object-cover"
                                    src="../images/sc-service.jpg"
                                    alt="Cross-sell Items in Netsuite"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>
                        <div key="project1" className="slide">
                            <div className="content">
                                <h3>
                                    Upsell &amp; cross-sell featured items for Site
                                    Builder
                                </h3>
                                <p>
                                    Increasing your average order value (AOV) is one
                                    of the best improvements you can make to a
                                    website. The profit margin on the increase is
                                    much higher than on the rest of the order,
                                    especially if you offer free or discounted
                                    shipping. Our custom solution can use manually
                                    selected or automatically determined lists of
                                    items to show on the product page or shopping
                                    cart, showing relevant accessories or
                                    complementary products.
                                </p>
                            </div>
                            <div className="media">
                                <StaticImage
                                    className="w-full h-full object-cover"
                                    src="../images/sb-service.jpeg"
                                    alt="Cross-sell Items in Netsuite"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>
                        <div key="project1" className="slide">
                            <div className="content">
                                <h3>
                                    Upsell &amp; cross-sell featured items for Site
                                    Builder
                                </h3>
                                <p>
                                    Increasing your average order value (AOV) is one
                                    of the best improvements you can make to a
                                    website. The profit margin on the increase is
                                    much higher than on the rest of the order,
                                    especially if you offer free or discounted
                                    shipping. Our custom solution can use manually
                                    selected or automatically determined lists of
                                    items to show on the product page or shopping
                                    cart, showing relevant accessories or
                                    complementary products.
                                </p>
                            </div>
                            <div className="media">
                                <StaticImage
                                    className="w-full h-full object-cover"
                                    src="../images/sb-service.jpeg"
                                    alt="Cross-sell Items in Netsuite"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>
                </Slider>
            </div>
                
            </div>
        </div>
    )
}

export default ProjectSlider
