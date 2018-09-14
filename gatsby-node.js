const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              path
            }
            frontmatter {
              language
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      const { templateKey, language } = edge.node.frontmatter;
      const component = path.resolve(`src/templates/${String(templateKey)}.js`);

      if (fs.existsSync(component))
        createPage({
          path: edge.node.fields.path,
          component,
          // additional data can be passed via context
          context: {
            id,
            language,
            templateKey,
          },
        });
      else console.warn('Component not found:', component);
    });

    // // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
  });
};

const remark = require('remark');
const remarkHTML = require('remark-html');

function wrapBody(o) {
  _.forEach(o, (value, key) => {
    if (_.isPlainObject(value)) wrapBody(value);
    if (key === 'body') {
      o[key] = remark()
        .use(remarkHTML)
        .processSync(value)
        .toString();
    }
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    wrapBody(node.frontmatter);
    const value = getPath({ node, getNode });
    createNodeField({
      name: `path`,
      node,
      value,
    });
  }
};

function getPath({ node, getNode }) {
  if (node.frontmatter.templateKey === 'homepage') return `/${node.frontmatter.language}/`;
  return createFilePath({ node, getNode });
}
