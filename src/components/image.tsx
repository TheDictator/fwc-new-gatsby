import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const Image = ({ image }) => {
  const imageData = getImage(image?.node?.localFile)

  if (!imageData) return null

  return (
    <div className="image-component">
      <GatsbyImage alt={image.node.altText} image={imageData} />
    </div>
  )
}
export default Image
