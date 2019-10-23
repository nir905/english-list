module.exports = {
  siteMetadata: {
    title: `English List | מילון באנגלית`,
    description: `מילון באנגלית - ללמוד מילים באנגלית בחינם ובכל מקום`,
    author: `Nir Avraham`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `English List`,
        short_name: `English List`,
        start_url: `/`,
        background_color: `#388E3C`,
        theme_color: `#388E3C`,
        display: `minimal-ui`,
        icon: `src/static/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
