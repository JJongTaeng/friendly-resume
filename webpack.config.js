const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const resume = require('./public/resume.json');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './build'),
    clean: true
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        // exclude: [path.resolve(__dirname, './src')]
      },
      {
        test: /\.css$/, // .css 파일인 경우
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      templateParameters: {
        title: resume.browserTitle
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/resume.json", to: "./public/resume.json" },
      ],
    }),
  ],
};
