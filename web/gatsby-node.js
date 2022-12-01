const moment = require("moment")
const path = require("path")

const createPaginatedPages = require("gatsby-paginate")

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
async function createBlogPostPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

    if (result.errors) throw result.errors;

    const postEdges = (result.data.allSanityPost || {}).edges || [];

    // postEdges
    //     .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
    //     .forEach((edge) => {
    //         const { id, slug = {}, publishedAt } = edge.node;
    //         const dateSegment = format(new Date(publishedAt), "yyyy/MM");
    //         const path = `/blog/${dateSegment}/${slug.current}/`;

    //         createPage({
    //             path,
    //             component: require.resolve("./src/templates/BlogPost.tsx"),
    //             context: { id },
    //         });
    //     });

    postEdges
    .filter((post) => !isFuture(new Date(post.node.publishedAt)))
    .forEach((post, index) => {
        const date = post.node.date
        createPage({
            path: `/${post.node.categories.nodes[0].slug}/${moment(date).format(
                "YYYY"
            )}/${moment(date).format("MM")}/${post.node.slug}.html`,
            component: BlogPostTemplate,
            context: {
                id: post.node.id,
                slug: post.node.slug,
                uri: post.node.uri,
                previous: index === 0 ? null : BlogPosts[index - 1].node,
                next:
                    index === BlogPosts.length - 1
                        ? null
                        : BlogPosts[index + 1].node,
            },
        })
    })
}
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    await createBlogPostPages(graphql, actions);
    
    // const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx")
    // const BlogTagPostsTemplate = path.resolve(
    //     "./src/templates/BlogTagPosts.tsx"
    // )
    // const BlogCategoryPostsTemplate = path.resolve(
    //     "./src/templates/BlogCategoryPosts.tsx"
    // )

    // const BlogPostsResult = await graphql(`
    //     {
    //         allWpPost {
    //             edges {
    //                 node {
    //                     id
    //                     slug
    //                     uri
    //                     link
    //                     title
    //                     excerpt
    //                     date(formatString: "MMMM DD, YYYY")
    //                     modified(formatString: "MMMM DD, YYYY")
    //                     author {
    //                         node {
    //                             avatar {
    //                                 url
    //                             }
    //                             id
    //                             name
    //                             uri
    //                             slug
    //                         }
    //                     }
    //                     featuredImage {
    //                         node {
    //                             localFile {
    //                                 childImageSharp {
    //                                     gatsbyImageData(
    //                                         width: 1920
    //                                         placeholder: BLURRED
    //                                         formats: [AUTO, WEBP, AVIF]
    //                                     )
    //                                 }
    //                             }
    //                         }
    //                     }
    //                     categories {
    //                         nodes {
    //                             id
    //                             count
    //                             name
    //                             slug
    //                         }
    //                     }
    //                     tags {
    //                         nodes {
    //                             id
    //                             count
    //                             name
    //                             slug
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    // if (BlogPostsResult.errors) {
    //     reporter.panicOnBuild("Error while running GraphQL query.")
    //     return
    // }

    // const BlogPosts = BlogPostsResult.data.allWpPost.edges

    // BlogPosts.forEach((post, index) => {
    //     const date = post.node.date
    //     createPage({
    //         path: `/${post.node.categories.nodes[0].slug}/${moment(date).format(
    //             "YYYY"
    //         )}/${moment(date).format("MM")}/${post.node.slug}.html`,
    //         component: BlogPostTemplate,
    //         context: {
    //             id: post.node.id,
    //             slug: post.node.slug,
    //             uri: post.node.uri,
    //             previous: index === 0 ? null : BlogPosts[index - 1].node,
    //             next:
    //                 index === BlogPosts.length - 1
    //                     ? null
    //                     : BlogPosts[index + 1].node,
    //         },
    //     })
    // })

    // createPaginatedPages({
    //     edges: BlogPosts,
    //     createPage: createPage,
    //     pageTemplate: "src/templates/BlogPosts.tsx",
    //     pageLength: 10,
    //     pathPrefix: "blog",
    // })

    // const BlogTagPosts = new Map()
    // const BlogCategoryPosts = new Map()

    // BlogPosts.forEach((post) => {
    //     const tags = post.node.tags.nodes
    //     if (tags && tags.length > 0) {
    //         tags.forEach((tag) => {
    //             if (BlogTagPosts.has(tag.slug)) {
    //                 BlogTagPosts.set(tag.slug, [
    //                     ...BlogTagPosts.get(tag.slug),
    //                     post,
    //                 ])
    //             } else {
    //                 BlogTagPosts.set(tag.slug, [post])
    //             }
    //             if (BlogTagPosts.has(tag.title)) {
    //                 BlogTagPosts.set(tag.title, [
    //                     ...BlogTagPosts.get(tag.title),
    //                     post,
    //                 ])
    //             } else {
    //                 BlogTagPosts.set(tag.title, [post])
    //             }
    //         })
    //     }
    //     const categories = post.node.categories.nodes
    //     if (categories && categories.length > 0) {
    //         categories.forEach((category) => {
    //             if (BlogCategoryPosts.has(category.slug)) {
    //                 BlogCategoryPosts.set(category.slug, [
    //                     ...BlogCategoryPosts.get(category.slug),
    //                     post,
    //                 ])
    //             } else {
    //                 BlogCategoryPosts.set(category.slug, [post])
    //             }
    //             if (BlogCategoryPosts.has(category.title)) {
    //                 BlogCategoryPosts.set(category.title, [
    //                     ...BlogCategoryPosts.get(category.title),
    //                     post,
    //                 ])
    //             } else {
    //                 BlogCategoryPosts.set(category.title, [post])
    //             }
    //         })
    //     }
    // })

    // const BlogTagSlugs = [...BlogTagPosts.keys()]
    // const BlogCategorySlugs = [...BlogCategoryPosts.keys()]
    // //const BlogCategoryTitles = [...BlogCategoryPosts.keys()];

    // if (BlogTagSlugs.length > 0) {
    //     BlogTagSlugs.forEach((BlogTagSlug) => {
    //         createPage({
    //             path: `/tag/${BlogTagSlug}`,
    //             component: BlogTagPostsTemplate,
    //             context: {
    //                 group: BlogTagPosts.get(BlogTagSlug),
    //                 slug: BlogTagSlug,
    //                 title: BlogTagPosts.get("tag.title"),
    //             },
    //         })
    //     })
    // }

    // if (BlogCategorySlugs.length > 0) {
    //     BlogCategorySlugs.forEach((BlogCategorySlug) => {
    //         createPage({
    //             path: `/category/${BlogCategorySlug}`,
    //             component: BlogCategoryPostsTemplate,
    //             context: {
    //                 group: BlogCategoryPosts.get(BlogCategorySlug),
    //                 slug: BlogCategorySlug,
    //                 title: BlogCategoryPosts.get("category.title"),
    //             },
    //         })
    //     })
    // }
}
