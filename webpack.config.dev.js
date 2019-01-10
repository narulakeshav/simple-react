const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
      }
    ],
  },
  devServer: {
    port: 3000, // specify port
    open: true, // open in browswer automatically
    historyApiFallback: true, // HTML history manipulation
    contentBase: path.join(__dirname, './dist'), // serve static files from public
    watchContentBase: true, // watches files from content base
    hotOnly: true,
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/assets/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [ '*', '.js', '.jsx' ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
