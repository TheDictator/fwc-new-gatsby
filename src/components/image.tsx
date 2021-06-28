import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

const Image = ({ image, altText }) => {

  const imageData = getImage(image?.node?.localFile)

  if (!imageData) return null

  return (
    <div className="image-component">
    {imageData && (
          <GatsbyImage image={imageData} alt={altText} />
    )}
    {!imageData && (
        <StaticImage
            src='../images/blog.jpg'
            alt={altText}
            placeholder="blurred"
        />
    )}
    </div>
  )
}
export default Image
