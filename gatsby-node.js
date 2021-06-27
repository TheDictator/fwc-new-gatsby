const moment = require('moment');
const path = require('path');

const createPaginatedPages = require('gatsby-paginate');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

exports.createPages = async ({
	graphql,
	actions,
	reporter
}) => {

	const {
		createPage
	} = actions;

	const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx");
	const BlogTagPostsTemplate = path.resolve("./src/templates/BlogTagPosts.tsx");
	const BlogCategoryPostsTemplate = path.resolve("./src/templates/BlogCategoryPosts.tsx");

	const BlogPostsResult = await graphql(`
	{
		allWpPost {
			edges {
				node {
					id
					slug
					status
					template
					format
					wordpress_id
					title
					excerpt
					date(formatString: "MMMM DD, YYYY")
					modified(formatString: "MMMM DD, YYYY")
					author {
						avatar_urls {
							wordpress_48
						}
						name
						slug
						wordpress_id
						id
						url
						description
						link
						slug
						path
					}
					featured_media {
						localFile {
							childImageSharp {
								fluid(maxWidth: 960, maxHeight: 600, quality: 85) {
									aspectRatio
									src
									srcSet
									sizes
									base64
									tracedSVG
									srcWebp
									srcSetWebp
								}
							}
						}
					}
					categories {
						id
						link
						wordpress_id
						count
						description
						name
						slug
						path
					}
					tags {
						id
						link
						wordpress_id
						count
						description
						name
						slug
						path
					}
				}
			}
		}
		
	}`);

	if (BlogPostsResult.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}

	const BlogPosts = BlogPostsResult.data.allWpPost.edges;

	BlogPosts.forEach((post, index) => {
		const category = post.node.categories.slug;
		const date = post.node.date;
		createPage({
			path: `/${post.node.categories[0].slug}/${moment(date).format('YYYY')}/${moment(date).format('MM')}/${post.node.slug}.html`,
			component: BlogPostTemplate,
			context: {
				id: post.node.wordpress_id,
				slug: post.node.slug,
				previous: index === 0 ? null : BlogPosts[index - 1].node,
				next: index === (BlogPosts.length - 1) ? null : BlogPosts[index + 1].node
			}
		});
	});

	const BlogTagPosts = new Map();
	const BlogCategoryPosts = new Map();

	BlogPosts.forEach((post) => {
		const tags = post.node.tags;
		if (tags && tags.length > 0) {
			tags.forEach((tag) => {
				if (BlogTagPosts.has(tag.slug)) {
					BlogTagPosts.set(tag.slug, [...BlogTagPosts.get(tag.slug), post]);
				} else {
					BlogTagPosts.set(tag.slug, [post]);
				}
			});
		}
		const categories = post.node.categories;
		if (categories && categories.length > 0) {
			categories.forEach((category) => {
				if (BlogCategoryPosts.has(category.slug)) {
					BlogCategoryPosts.set(category.slug, [...BlogCategoryPosts.get(category.slug), post]);
				} else {
					BlogCategoryPosts.set(category.slug, [post]);
				}
			});
		}
	});

	const BlogTagSlugs = [...BlogTagPosts.keys()];
	const BlogCategorySlugs = [...BlogCategoryPosts.keys()];

	if (BlogTagSlugs.length > 0) {
		BlogTagSlugs.forEach((BlogTagSlug) => {
			createPage({
				path: `/tag/${BlogTagSlug}`,
				component: BlogTagPostsTemplate,
				context: {
					group: BlogTagPosts.get(BlogTagSlug),
					slug: BlogTagSlug,
				}
			});
		});
	}

	if (BlogCategorySlugs.length > 0) {
		BlogCategorySlugs.forEach((BlogCategorySlug) => {
			createPage({
				path: `/category/${BlogCategorySlug}`,
				component: BlogCategoryPostsTemplate,
				context: {
					group: BlogCategoryPosts.get(BlogCategorySlug),
					slug: BlogCategorySlug,
				}
			});
		});
	}

	createPaginatedPages({
		edges: BlogPosts,
		createPage: createPage,
		pageTemplate: 'src/templates/BlogPosts.tsx',
		pageLength: 10,
		pathPrefix: 'blog',
		
	});
}