var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
 };