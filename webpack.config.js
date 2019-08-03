const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
        "vue$": "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([{ from: './public' }]),
  ],
}