import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

const Image = ({ image, altText, src }) => {

  const imageData = getImage(image?.node?.localFile)

  if (!imageData) return null

  return (
    <div className="image-component">
    {imageData && image && (
          <GatsbyImage image={imageData} alt={altText} />
    )}
    {src && (
        <StaticImage
            src={src}
            alt={altText}
            placeholder="blurred"
        />
    )}
    </div>
  )
}
export default Image
