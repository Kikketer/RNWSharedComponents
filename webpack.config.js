/**
 * Chris Weed (chris@workgrid.com)
 * Copyright 2019 Workgrid Software LLC
 */

const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/components/index.tsx'),
  output: {
    library: 'SharedComponents',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            target: 'es5',
            outDir: 'dist'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: ['.tsx', '.ts', '.js']
  }
}
