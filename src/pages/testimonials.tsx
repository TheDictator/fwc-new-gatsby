import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Cta from "../components/Ui/Cta";
import TestimonialSlider from "../components/Ui/TestimonialSlider";
export interface Props {
	location: Location;
}

export const TestimonialsPage = (props: Props) => {
	return (
		<Layout location={props.location}>
			<SEO title="Testimonials" />
			<div className="relative bg-white py-16 sm:pt-24 lg:pt-32">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<h1 className="text-base font-semibold tracking-wider text-blue-600 uppercase">About Us</h1>
					<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
						Testimonials
					</p>
					<p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                        Read raving reviews from our vast customer base. Our retention rate is near perfect for a reason.
					</p>
      			</div>
			</div>
			<div className="relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight text-center">
                        Recent Testimonials
                    </h2>
                </div>
				<div className="max-w-prose mx-auto relative px-4">
					<TestimonialSlider />
				</div>
			</div>
			<Cta
                headline="Ready to solve your woes?"
                description="Contact Us. The first hour is free."
            />
		</Layout>
	);
};

export default TestimonialsPage;

