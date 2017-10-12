module.exports = {
  siteMetadata: {
    title: `Demo Midback Office`,
  },
  plugins: [`gatsby-plugin-react-helmet`,{
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
    },
  }],
}
