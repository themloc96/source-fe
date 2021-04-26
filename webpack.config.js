var path = require('path');

module.exports = {
  entry: {
    App: "./app/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, 'app/js'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}