const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('./webpack.config');
const _ = require('lodash');

config.devtool = 'cheap-module-source-map';
config.mode = 'production';
config.output = {
  path: __dirname + '/dist',
  filename: '[name].bundle.js',
  library: 'Style',
  libraryTarget: 'umd',
  umdNamedDefine: true
};
config.plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].bundle.css"
  })
];

module.exports = config;
