require(`dotenv`).config({path: `.env`,})

module.exports = {
  siteMetadata: {
    title: "HeatherShober.com",
    author: "Mitch Hussey",
    description: "Memorial website for Heather Hussey Shober"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HeatherShober.com',
        short_name: 'Heather Shober',
        start_url: '/',
        background_color: '#1d2135',
        theme_color: '#1d2135',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },

    
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
