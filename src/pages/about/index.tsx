import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { ChildImageSharp } from '../../contracts/post';
import '../../styles/blog.scss';
export interface Props {
	data: {
		file: ChildImageSharp;
	};
	location: Location;
}

export const AboutPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			<SEO title="About FourthWave Consulting" />
			<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
				<div id="primary" className="content-area with-sidebar col-span-1 md:col-span-8">
					<div className="about">
						
					</div>
				</div>
				<div className="sidebar col-span-1 md:col-span-4 top-0 b-0 md:sticky md:h-screen" id="secondary">
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
