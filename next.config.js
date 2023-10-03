/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'ar'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    localeDetection: false
  },

}
const path = require('path')
// const webpack = require("webpack")

module.exports = nextConfig
// pack = webpack
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }))
    return config;
  },
  i18n: {
      // providing the locales supported by your application
    locales: ["en", "ar"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
    localeDetection: false
  },

}

// const withNextIntl = require('next-intl/plugin')(
//   // This is the default (also the `src` folder is supported out of the box)
//   './i18n.js'
// );
 
// module.exports = withNextIntl(nextConfig);