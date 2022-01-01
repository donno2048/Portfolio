const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
module.exports = merge(common, {
  devtool: "source-map",
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      favicon: './src/favicon.png'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});