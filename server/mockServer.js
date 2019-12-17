const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const Mock = require('mockjs')
const tool = require('./tool.js')
let mocks = []

const registerRoutes = (app) => {
  mocks = tool.getMocks()
  unRegisterRoutes(app)
  mocks.forEach(mock => {
    app[mock.method](mock.url, (req, res) => {
      res.json(Mock.mock(mock.data));
    })
    app._router.stack[app._router.stack.length - 1].isMockRoute = true
  })
}
const unRegisterRoutes = (app) => {
  app._router.stack = app._router.stack.filter(router => !router.isMockRoute)
}
const watch = (watchPath,app) => {
  chokidar.watch(watchPath, {
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add' || event === 'unlink') {
      try {
        registerRoutes(app)
        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
module.exports = app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  registerRoutes(app)
  watch(tool.proxyDirPath,app)
  watch(tool.apiDirPath,app)
}