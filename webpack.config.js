var path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['react','env'],
              plugins: ['transform-class-properties']
          }
        }
      }

    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};
