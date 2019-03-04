const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const htmlTemplate = require('html-webpack-template');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'rizax.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: './build'
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
      inject: false,
      template: htmlTemplate,
      appMountId: 'app',
      title: 'RizAx - ریزعکس - فشرده سازی تصاویر، سریع و ایمن'
    })
  ]
};
