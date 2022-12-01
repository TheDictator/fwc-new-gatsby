const myQuery = `{
  pages: allSitePage {
    nodes {
      id: id
      component
      path
      componentChunkName
      jsonName
      internal {
        type
        contentDigest
        owner
      }
    }
  }
  posts: allWpPost {
      nodes {
        id:id
        categories {
          nodes {
            name
            slug
            wpChildren {
              nodes {
                name
                slug
              }
            }
          }
        }
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        modified
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: 'index name to target', // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
];
module.exports = queries