import React, { Fragment, ReactNode } from 'react';
import ReactWordcloud from 'react-wordcloud';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
export interface Props {
	title?: ReactNode;
}
const callbacks = {
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    luminosity: 'light',
  hue: 'blue',
  };
  const size = [200, 100];
const words = [
    {
      text: 'Netsuite',
      value: 6,
    },
    {
      text: 'E-Commerce',
      value: 5,
    },
    {
      text: 'Marketing',
      value: 4,
    },
    {
      text: 'SEO',
      value: 3,
    },
    {
        text: 'Google',
        value: 3,
    },
    {
    text: 'Site Builder',
    value: 35,
    },
  ]

export const TagCloudd = () => {
	return (
		<Fragment>
            <h3>Tag Cloud</h3>
            <ReactWordcloud
            callbacks={callbacks}
            options={options}
            size={size}
            words={words}
            />
		</Fragment>
	);
};

export default TagCloudd;
