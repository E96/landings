const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV

const config = {
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
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
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
  devtool: '#cheap-module-eval-source-map'
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        comparisons: true,
        drop_debugger: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin('bundle.css')
  )

  delete config.module.loaders[1].loaders
  config.module.loaders[1].loader = ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader?sourceMap')

  config.devtool = '#cheap-module-source-map'
}

module.exports = config
