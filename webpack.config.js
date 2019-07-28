const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: `${__dirname}/src/client`,
  entry: {
    "guide-scripts": "./StyleGuide.jsx",
    "guide-styles": "./StyleGuide.css",
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".css",
    ],
    modules: [
      "node_modules",
      "src/client",
      "src/client/routes",
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: [
          /\.scss/,
          /\.css$/,
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          }
        ]
      },
      {
        test: [
          /\.jsx?$/,
        ],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
    ],
  },
};
