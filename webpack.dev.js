const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/lib/',
    filename: 'bosssoft-ui.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'BOSSSOFTUI',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
    alias: {
      "bosssoft-ui": path.resolve("./")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|lib)/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};