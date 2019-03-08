const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'rizax.js',
    path: path.resolve(__dirname, 'build')
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
