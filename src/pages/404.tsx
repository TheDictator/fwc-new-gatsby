import React from 'react';
import { Link } from 'gatsby';
import Gif404 from '../images/404.gif';

import Layout from '../components/Layout';
import SEO from '../components/SEO';


export interface Props {
	location: Location;
}
export const NotFoundPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			<SEO title="404: Not found" />
			<div className="not-found-404">
				<h1>404: Not found</h1>
				<p>You just hit a route that doesn't exist... the sadness.</p>
				<div className="graphic">
					<img src={Gif404} alt="404: Not found" title="404: Not found" />
				</div>
				<div className="action margin-bottom-36px">
					<Link to="/" className="margin-right-24px">
						Go Home
					</Link>
					<Link to="/blog">
						Go to blog
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;

