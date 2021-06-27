import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Image = ({
  image,
  className,
  width,
  alt,
  gatsbyData,
}: {
  image?: string;
  width?: number;
  alt: string;
  className?: string;
  gatsbyData?: any;
}) => {

  return (
    <div className="image-component">
      <GatsbyImage image={gatsbyImageData} className={className} alt={alt} />
    </div>
  );
};
