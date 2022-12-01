export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63887116e9e83c720d901100",
                  title: "Sanity Studio",
                  name: "fwc-gatsby-sanity-studio",
                  apiId: "1f4887c2-02f5-463f-81c3-357bf7ebce8d",
                },
                {
                  buildHookId: "63887116e9e83c720d9010ff",
                  title: "Blog Website",
                  name: "fwc-gatsby-sanity",
                  apiId: "676d7881-3b5f-4dd2-804c-67d42303d13d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kevincarpdev/fwc-gatsby-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://fwc-gatsby-sanity.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
