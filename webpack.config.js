const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-stage-0'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                helpers: false,
                polyfill: false,
                regenerator: true,
                moduleName: '@babel/runtime'
              }]
            ],
            babelrc: false,
            cacheDirectory: true
          }
        },
        include: [
          path.join(__dirname, '../node_modules/@hlj')
        ]
      }
    ]
  }
};
