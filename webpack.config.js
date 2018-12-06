const path = require('path');

module.exports = {
  entry: './enum.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true
};
