const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulMemory query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulMemory {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }
      // Resolve the paths to our template
      const memoryTemplate = path.resolve("./src/templates/memory.js");
      // Then for each result we create a page.
      result.data.allContentfulMemory.edges.forEach(edge => {
        createPage({
          path: `/memories/${edge.node.slug}/`,
          component: slash(memoryTemplate),
          context: {
	          slug: edge.node.slug,
            id: edge.node.id
          }
        });
      });
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
};