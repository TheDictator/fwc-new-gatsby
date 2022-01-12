import React, { FC, useRef, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Testimonials from '../../../json/testimonials.json';

interface SliderProps {
    className?: string
    headline?: string
    description?: string
    sliderItems?: {
        sliderText: string
        sliderAuthor: string
    }[]
}

const TestimonialSlider: FC<SliderProps> = ({  }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const slider1 = useRef<any>(null)

    function afterChangeHandler(currentSlide: number) {
        setSlideIndex(currentSlide)
    }
    const settings = {
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className="testimonial-slider">
                <div className="slider-container">
                    
                    <div className="sliderContainer py-6">
                        <Slider
                            {...settings}
                            ref={slider1}
                            className="slider"
                            afterChange={afterChangeHandler}
                        >
                            {Testimonials.testimonials.map((item, i) => (
                                <blockquote key={i}>
                                    <div className="relative pt-6">
                                        <svg
                                            className="absolute top-0 left-0 transform -translate-y-1 h-8 w-8 text-gray-200"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                        >
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                        <p className="relative text-base text-gray-500">
                                            {item.comment}
                                        </p>
                                    </div>
                                    <footer className="mt-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="text-base font-medium text-gray-700">
                                                {item.name}
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider
