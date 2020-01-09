'use strict'

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  devServer:{
    after:require("./server/index.js"),
    port:8081
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve("./src")
      }
    }
  }
}
