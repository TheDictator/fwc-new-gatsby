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
			<div id="primary" className="content-area max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8">
				<div className="about prose mx-auto">
					<h1>About Fourth Wave Consulting</h1>

					<h3>A Brief History</h3>
					<p>David Norris worked in Windows networking & IT since the early 90's, deploying and supporting Windows & Mac networks. 
					I then worked for an early e-commerce startup focusing on digital delivery long before the Apple iTunes store came along. I
						started consuluting in 2003, continuing to support some local IT clients and working with small & medium sized companies working with 
						NetSuite. It was much more interesting to work with web sites and back-end ERP functionality than support Windows computers,
						and that's what I've been focused on since then - coming up on 20 years - and I'm glad I did. 
						</p>
						<p>For my first 9 years working with NetSuite, I was the CTO for a medium sized online retailer. When I started, they were printing 
						orders and storing them in file cabinets, and that was the extent of their ERP system. I helped them to evaluate a bunch of options,
						implemented NetSuite for every department in the company and built out the website. We went from $2M in sales to ~$12M in the 9 years 
						I was there. I continued to consult over that time, learning more about NetSuite every year. 
						After more than 15 years of experience with NetSuite, I'm familiar with every area, from scripting to websites to API integrations. I 
						enjoy the challenge of architecting complex solutions, leveraging the power of the platform to adapt it to the business workflows 
						that my clients are used to, and helping them to optimize them when that will help. My alliegiance is to my clients above all else - 
						sometimes the best solution is one that doesn't involve us or NetSuite, and I'm not shy if that's the case. We also take the long 
						view, and build our solutions with long-term support in mind. We document all our work, and are ready if a client calls us about work 
						we did years ago. 
						</p>
						<h3>Our Team</h3>
						<p>Kevin Carpenter is our designer and developer, and has worked with NetSuite for more than 10 years. With a broad background in 
						e-commerce and website platforms including Shopify, WordPress, Netlify and many others. He built the fast and easy to use this very 
						site, as a headless front end for the WordPress blog that makes it easy for us to write content and manage other aspects of the site. 
						</p>
						<p>We contract with various NetSuite-certified experts for the few areas we lack expertise in ourselves, primarily accounting. 
						</p>
						<h3>What Makes Us Different</h3>
						<p>
						<ul>
						<li><strong>Consistency</strong>. David is the primary contact and project manager for all projects, and has been since 2004. When you call in 5 years, it will be the same. </li>
						<li><strong>We think like you</strong>. We approach your project like we're your CTO - recommending & providing solutions for your long-term best interest, even if it doesn't involve us or NetSuite.</li>
						<li><strong>Broad NetSuite Experience</strong>. Rather than hire inexpensive developers just starting out, we bring experience based on projects with hundreds of companies 
						and dozens of different technologies. </li>
						<li><strong>Customer Education</strong>. An important aspect of our relationship is to help you learn more about NetSuite, providing resources and teaching you about areas of the system you might not know exist. </li>
						</ul>
						</p>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
