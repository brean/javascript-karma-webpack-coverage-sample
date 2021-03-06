const path = require("path");
const webpack = require('webpack');
const JsDocPlugin = require('jsdoc-webpack-plugin-v4');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "test"),
          path.resolve(__dirname, "node_modules")
        ],
        enforce: 'post',
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        }
      },
      {
        test: /.js/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  },
  plugins: [
    new JsDocPlugin({
      conf: path.join(__dirname, 'jsdoc.conf.json'),
    })
  ]
};
