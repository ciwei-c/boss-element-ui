const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const middlewareProxy = require('http-proxy-middleware')
const tool = require('./tool.js')

const registerProxy = (app) => {
  let proxys = tool.getProxyUrl()
  let proxyEnable = tool.getProxyEnable()
  unRegisterProxy(app)
  if (proxyEnable) {
    Object.keys(proxys).forEach(url => {
      app.use(
        url,
        middlewareProxy({
          target: proxys[url].target, changeOrigin: true, onProxyReq: (proxyReq, req) => {
            if (req.body) {
              let bodyData = JSON.stringify(req.body);
              proxyReq.setHeader('Content-Type', 'application/json');
              proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
              proxyReq.write(bodyData);
            }
          }
        })
      );
      app._router.stack[app._router.stack.length - 1].isProxyRoute = true
    })
  }
}

const unRegisterProxy = (app) => {
  app._router.stack = app._router.stack.filter(router => !router.isProxyRoute)
}
const watch = (watchPath,app) => {
  chokidar.watch(watchPath, {
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add' || event === 'unlink') {
      try {
        registerProxy(app)
        console.log(chalk.magentaBright(`\n > Proxy Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
module.exports = app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  registerProxy(app)
  watch(tool.proxyDirPath,app)
}