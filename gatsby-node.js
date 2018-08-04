/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

// exports.onCreateWebpackConfig = ({ actions, stage }) => {
//   if (stage === 'build-javascript') {
//     actions.setWebpackConfig({
//       plugins: [new BundleAnalyzerPlugin()],
//     })
//   }
// }

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  const redirectInBrowser = process.env.NODE_ENV === 'development';

  createRedirect({ fromPath: `/admin`, toPath: '/admin/', redirectInBrowser, isPermanent: true });
};
