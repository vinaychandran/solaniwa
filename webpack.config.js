const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  // mode: 'development',
   mode: 'production',
  entry: {
    common: './src/assets/js/common.ts',
    index: './src/assets/js/index.ts',
    style: './src/assets/scss/style.scss'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'assets/js/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                  url: false
              }
            },
            'sass-loader'
          ]
        })
      },{
        test: /\.(jpg|png|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath : '/assets/images/',
                    publicPath : function (path) {
                        return '/assets/images/' + path;
                    }
                }
            }
        ]
      },{
        test: /\.ejs$/,
        use: [
          'html-loader',
          'ejs-html-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('assets/css/[name].css'),
    new CopyWebpackPlugin([{
      from: './src/assets/images',
      to: 'assets/images'
    }]),
    new HtmlWebpackPlugin({inject: false, filename: 'index.html', template: './src/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'fees/index.html', template: './src/fees/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/index.html', template: './src/news/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/momoyama.html', template: './src/news/momoyama.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/heroes.html', template: './src/news/heroes.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/onsen.html', template: './src/news/onsen.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'explore/onsen.html', template: './src/explore/onsen.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'explore/beauty.html', template: './src/explore/beauty.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'explore/health.html', template: './src/explore/health.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'explore/relax.html', template: './src/explore/relax.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'explore/eat.html', template: './src/explore/eat.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'explore/fun.html', template: './src/explore/fun.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'tickets/index.html', template: './src/tickets/index.ejs'}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  }
};