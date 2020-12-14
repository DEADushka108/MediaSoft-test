const path = require('path');
const publicDirection = path.resolve(__dirname, 'public');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    bundle: './index.js',
  },
  output: {
    filename: '[name].js',
    path: publicDirection,
  },
  devServer: {
    contentBase: publicDirection,
    compress: true,
    port: 2020,
    watchContentBase: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|gif|jpg)$/,
        exclude: [path.resolve(__dirname, './src/img/icons')],
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, './src/img/icons')],
        use: [
            'svg-sprite-loader',
            'svgo-loader'
        ]
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: false,
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new SpriteLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: publicDirection,
      },
      {
        from: path.resolve(__dirname, 'src/img/bg'),
        to: path.resolve(__dirname, 'public/img/bg')
      },
      {
        from: path.resolve(__dirname, 'src/img/content'),
        to: path.resolve(__dirname, 'public/img/content')
      },
      {
        from: path.resolve(__dirname, 'src/fonts'),
        to: path.resolve(__dirname, 'public/fonts')
      }]
    }),
  ]
}
