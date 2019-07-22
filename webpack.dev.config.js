const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('./webpack.config');
const _ = require('lodash');

config.devtool = "eval";
config.mode = "development";
config.devServer = {
  inline: true,
  hot: true,
  port: "8081",
};
config.output = {
  path: __dirname + '/public',
  filename: '[name].dev.js',
};
config.plugins = _.union(config.plugins, [
  new MiniCssExtractPlugin({
    filename: "[name].dev.css"
  })
]);
