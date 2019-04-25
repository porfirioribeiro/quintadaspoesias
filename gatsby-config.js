module.exports = {
  siteMetadata: {
    title: 'Quinta das Poesias',
    author: 'Porfirio Ribeiro',
    description: 'Produção e comércio de doces e licores tradicionais',
    siteUrl: `https://quintadaspoesias.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Quinta das Poesias',
        short_name: 'Q. das Poesias',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-139042200-1',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
