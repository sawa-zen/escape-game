const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const projectRootPath = path.resolve(__dirname, './');
const assetsPath = path.resolve(projectRootPath, './dist');

module.exports = {
  entry: {
    index: [
      'babel-polyfill',
      'whatwg-fetch',
      `${__dirname}/src/index.js`
    ],
  },
  plugins: [
    new CleanWebpackPlugin([assetsPath], { root: projectRootPath }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: 'escape-game.js',
    library: "EscapeGame",
    libraryTarget: "var",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          compact: false,
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
};
