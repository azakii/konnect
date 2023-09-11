/** @type {import('next').NextConfig} */
const nextConfig = {}
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
    }}