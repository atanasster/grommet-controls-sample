const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dedupeDependencies = (dependencies, alias) => (
  dependencies.reduce((res, dependecy) => ({
    ...res, [dependecy]: path.resolve(`./node_modules/${dependecy}`),
  }), alias)
);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './public',
    }]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve('./dist'),
    historyApiFallback: true,
    hot: true,
    port: 8585,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: dedupeDependencies(
      ['@babel', 'styled-components', 'grommet', 'grommet-icons', 'react', 'react-dom', 'react-router', 'react-router-dom'], {}
    ),
  },

};
