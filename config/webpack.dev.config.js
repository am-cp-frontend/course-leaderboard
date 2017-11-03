const util = require('./util')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    module: {
        rules: util.styleLoaders({
            extract: true
        })
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: '../index.html'
        })
    ]
}