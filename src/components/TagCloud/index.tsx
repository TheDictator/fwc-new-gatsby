import React, { Fragment, ReactNode } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { useStaticQuery, graphql } from 'gatsby';
import words from "./words";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
export interface Props {
	title?: ReactNode;
}
const callbacks = {
    onWordClick: console.log,
  }
const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    luminosity: 'light',
  hue: 'blue',
  };
  const size = [200, 100];


export const TagCloudd = () => {
  const { allWordpressTag } = useStaticQuery(graphql`
      query {
        allWordpressTag {
          edges {
            node {
              count
              name
            }
          }
        }
      }
	`);
	return (
		<Fragment>
            <h3 className="text-center text-xl text-black">Tag Cloud</h3>
            <ReactWordcloud
            callbacks={callbacks}
            options={options}
            size={size}
            //words={allWordpressTag.edges.node}
            words={words}
            />
		</Fragment>
	);
};

export default TagCloudd;
