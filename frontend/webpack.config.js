const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  resolve: {
    root: path.resolve(__dirname, './src')
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader!postcss-loader'
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    })
  ],
  postcss: () => {
    return [
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')(),
    ]
  },
  // devtool: '#cheap-module-eval-source-map'
}
