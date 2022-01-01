import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Cta from "../../components/Ui/Cta"
export interface Props {
	location: Location;
}

export const ServicesPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			<SEO title="Our Services" />
			<div className="relative bg-white py-16 sm:py-24 lg:py-32">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<h1 className="text-base font-semibold tracking-wider text-blue-600 uppercase">About Us</h1>
					<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
						Privacy Policy
					</p>
					<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Boring markup that the law requires.
					</p>
      			</div>
			</div>			
			<Cta
                headline="Ready to solve your woes?"
                description="Contact Us. The first hour is free."
            />
		</Layout>
	);
};

export default ServicesPage;
