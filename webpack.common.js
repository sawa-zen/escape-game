const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const projectRootPath = path.resolve(__dirname, './');
const assetsPath = path.resolve(projectRootPath, './dist');

module.exports = {
  entry: {
    index: `${__dirname}/src/index.js`,
  },
  plugins: [
    new CleanWebpackPlugin([assetsPath], { root: projectRootPath }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: assetsPath,
    filename: 'escape-game.js',
    library: 'EscapeGame',
    libraryTarget: 'umd',
    libraryExport: 'default',
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
