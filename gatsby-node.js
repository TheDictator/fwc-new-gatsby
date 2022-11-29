const moment = require("moment")
const path = require("path")

const createPaginatedPages = require("gatsby-paginate")

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const BlogPostTemplate = path.resolve("./src/templates/BlogPost.tsx")
    const BlogTagPostsTemplate = path.resolve(
        "./src/templates/BlogTagPosts.tsx"
    )
    const BlogCategoryPostsTemplate = path.resolve(
        "./src/templates/BlogCategoryPosts.tsx"
    )

    const BlogPostsResult = await graphql(`
        {
            allWpPost {
                edges {
                    node {
                        id
                        slug
                        uri
                        link
                        title
                        excerpt
                        date(formatString: "MMMM DD, YYYY")
                        modified(formatString: "MMMM DD, YYYY")
                        author {
                            node {
                                avatar {
                                    url
                                }
                                id
                                name
                                uri
                                slug
                            }
                        }
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            width: 1920
                                            placeholder: BLURRED
                                            formats: [AUTO, WEBP, AVIF]
                                        )
                                    }
                                }
                            }
                        }
                        categories {
                            nodes {
                                id
                                count
                                name
                                slug
                            }
                        }
                        tags {
                            nodes {
                                id
                                count
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    `)

    if (BlogPostsResult.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.")
        return
    }

    const BlogPosts = BlogPostsResult.data.allWpPost.edges

    BlogPosts.forEach((post, index) => {
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

    createPaginatedPages({
        edges: BlogPosts,
        createPage: createPage,
        pageTemplate: "src/templates/BlogPosts.tsx",
        pageLength: 10,
        pathPrefix: "blog",
    })

    const BlogTagPosts = new Map()
    const BlogCategoryPosts = new Map()

    BlogPosts.forEach((post) => {
        const tags = post.node.tags.nodes
        if (tags && tags.length > 0) {
            tags.forEach((tag) => {
                if (BlogTagPosts.has(tag.slug)) {
                    BlogTagPosts.set(tag.slug, [
                        ...BlogTagPosts.get(tag.slug),
                        post,
                    ])
                } else {
                    BlogTagPosts.set(tag.slug, [post])
                }
                if (BlogTagPosts.has(tag.title)) {
                    BlogTagPosts.set(tag.title, [
                        ...BlogTagPosts.get(tag.title),
                        post,
                    ])
                } else {
                    BlogTagPosts.set(tag.title, [post])
                }
            })
        }
        const categories = post.node.categories.nodes
        if (categories && categories.length > 0) {
            categories.forEach((category) => {
                if (BlogCategoryPosts.has(category.slug)) {
                    BlogCategoryPosts.set(category.slug, [
                        ...BlogCategoryPosts.get(category.slug),
                        post,
                    ])
                } else {
                    BlogCategoryPosts.set(category.slug, [post])
                }
                if (BlogCategoryPosts.has(category.title)) {
                    BlogCategoryPosts.set(category.title, [
                        ...BlogCategoryPosts.get(category.title),
                        post,
                    ])
                } else {
                    BlogCategoryPosts.set(category.title, [post])
                }
            })
        }
    })

    const BlogTagSlugs = [...BlogTagPosts.keys()]
    const BlogCategorySlugs = [...BlogCategoryPosts.keys()]
    //const BlogCategoryTitles = [...BlogCategoryPosts.keys()];

    if (BlogTagSlugs.length > 0) {
        BlogTagSlugs.forEach((BlogTagSlug) => {
            createPage({
                path: `/tag/${BlogTagSlug}`,
                component: BlogTagPostsTemplate,
                context: {
                    group: BlogTagPosts.get(BlogTagSlug),
                    slug: BlogTagSlug,
                    title: BlogTagPosts.get("tag.title"),
                },
            })
        })
    }

    if (BlogCategorySlugs.length > 0) {
        BlogCategorySlugs.forEach((BlogCategorySlug) => {
            createPage({
                path: `/category/${BlogCategorySlug}`,
                component: BlogCategoryPostsTemplate,
                context: {
                    group: BlogCategoryPosts.get(BlogCategorySlug),
                    slug: BlogCategorySlug,
                    title: BlogCategoryPosts.get("category.title"),
                },
            })
        })
    }
}
