const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // mode: 'development',
   mode: 'production',
  entry: {
    common: './src/assets/js/common.ts',
    index: './src/assets/js/index.ts',
    gallery: './src/assets/js/gallery.ts',
    tickets: './src/assets/js/tickets.ts',
    style: './src/assets/scss/style.scss',
    style_en: './src/assets/scss/style_en.scss',
    style_kr: './src/assets/scss/style_kr.scss',
    style_cn: './src/assets/scss/style_cn.scss'
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
        use:  [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    url: false
                    // ,minimize: true
                }
            },

            {
                loader: "sass-loader",
                options: {
                    sourceMap: false
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
    new MiniCssExtractPlugin({filename:'assets/css/[name].css'}),
    new CopyWebpackPlugin([
      {
        from: './src/assets/images',
        to: 'assets/images'
      },{
        from: './src/assets/js/*.js',
        to: 'assets/js/[name].js'
      }
    ]),

    new HtmlWebpackPlugin({inject: false, filename: 'index.html', template: './src/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/index.html', template: './src/en/index.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'fees/index.html', template: './src/fees/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/fees/index.html', template: './src/en/fees/index.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'news/index.html', template: './src/news/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/momoyama.html', template: './src/news/momoyama.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/heroes.html', template: './src/news/heroes.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/onsen.html', template: './src/news/onsen.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/faq.html', template: './src/news/faq.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/beginner.html', template: './src/news/beginner.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'news/event.html', template: './src/news/event.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'en/news/index.html', template: './src/en/news/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/news/momoyama.html', template: './src/en/news/momoyama.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/news/heroes.html', template: './src/en/news/heroes.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'explore/onsen.html', template: './src/explore/onsen.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/explore/onsen.html', template: './src/en/explore/onsen.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'explore/beauty.html', template: './src/explore/beauty.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/explore/beauty.html', template: './src/en/explore/beauty.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'explore/health.html', template: './src/explore/health.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/explore/health.html', template: './src/en/explore/health.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'explore/relax.html', template: './src/explore/relax.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/explore/relax.html', template: './src/en/explore/relax.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'explore/eat.html', template: './src/explore/eat.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/explore/eat.html', template: './src/en/explore/eat.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'explore/fun.html', template: './src/explore/fun.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/explore/fun.html', template: './src/en/explore/fun.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'tickets/index.html', template: './src/tickets/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'tickets/admission.html', template: './src/tickets/admission.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'tickets/bath.html', template: './src/tickets/bath.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'tickets/package.html', template: './src/tickets/package.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'tickets/costume.html', template: './src/tickets/costume.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'tickets/relaxation.html', template: './src/tickets/relaxation.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'tickets/beauty.html', template: './src/tickets/beauty.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'en/tickets/index.html', template: './src/en/tickets/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/tickets/admission.html', template: './src/en/tickets/admission.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/tickets/bath.html', template: './src/en/tickets/bath.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/tickets/package.html', template: './src/en/tickets/package.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/tickets/costume.html', template: './src/en/tickets/costume.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/tickets/relaxation.html', template: './src/en/tickets/relaxation.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/tickets/beauty.html', template: './src/en/tickets/beauty.ejs'}),


    new HtmlWebpackPlugin({inject: false, filename: 'gallery/index.html', template: './src/gallery/index.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/gallery/index.html', template: './src/en/gallery/index.ejs'}),

    new HtmlWebpackPlugin({inject: false, filename: 'term/term.html', template: './src/term/term.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'en/term/term.html', template: './src/en/term/term.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'kr/term/term.html', template: './src/kr/term/term.ejs'}),
    new HtmlWebpackPlugin({inject: false, filename: 'cn/term/term.html', template: './src/cn/term/term.ejs'}),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  }
};