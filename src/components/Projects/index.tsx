import React, { FC, useRef, useState } from 'react'
import Slider from "react-slick";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface SliderProps {
  className?: string
  headline?: string
  description?: string
  sliderItems?: {
    sliderText: string;
    sliderAuthor: string;
  }[];
}

const Projects: FC<SliderProps> = ({ headline, description }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slider1 = useRef<any>(null);

  function afterChangeHandler(currentSlide: number) {
    setSlideIndex(currentSlide);
  }

  function next() {
    slider1.current.slickNext();
  }

  function previous() {
    slider1.current.slickPrev();
  }
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '30px',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1260,
            settings: {
                slidesToShow: 3
            }
        },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  };

  return (
    <div className="featured-slider">
        <h3 className="headline">Choose the Boost that's right for you</h3>
        <div className="slider-container">
            <div className="slider-pagination">
                <button className="prev" onClick={previous}>
                    
                </button>
                {/* {slideIndex + 1}/{sliderItems.length} */}
                <button className="next" onClick={next}>
                    
                </button>
            </div>

            <Slider
            {...settings}
            ref={slider1}
            className="slider"
            afterChange={afterChangeHandler}
            >
            <div key="product1" className="slide">
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Projects
