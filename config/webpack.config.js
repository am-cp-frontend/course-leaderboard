const path = require('path')
const merge = require('webpack-merge')
const devConfiguration = require('./webpack.dev.config')
const prodConfiguration = require('./webpack.prod.config')
const vueLoaderConfiguration = require('./vue-loader.config')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const baseConfiguration = {
    entry: '../src/main.js',
    output: {
        filename: 'app.js',
        path: resolve('build')
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfiguration
            }
        ]
    }
}

module.exports = merge(baseConfiguration, (process.argv.includes('--env.prod')
    ? prodConfiguration 
    : devConfiguration))