const path = require('path')
const fs = require('fs')
const resolve = (p) => {
  return path.join(__dirname, p)
}
const proxyDirPath = resolve("../.bosssoft/proxy")
const apiDirPath = resolve("../.bosssoft/apis")

module.exports = {
  proxyDirPath,
  apiDirPath,
  pureRequire(requirePath) {
    this.delRequireCache(requirePath)
    return require(requirePath)
  },
  delRequireCache(requirePath) {
    delete require.cache[requirePath]
  },
  isProxy(url, proxyUrls) {
    for (let i = 0; i < proxyUrls.length; i++) {
      let proxyUrl = proxyUrls[i];
      if (url.startsWith(proxyUrl + '/') || url === proxyUrl) return true;
    }
    return false;
  },
  getProxyUrl() {
    let urls = this.pureRequire(path.join(proxyDirPath,'/index.json'))
    try {
      urls = Object.prototype.toString.call(urls) === "[object Object]" ? urls : {}
    } catch (err) {
      urls = {}
    }
    return urls
  },
  getEnable(dirPath) {
    let enable = false
    try {
      enable = this.pureRequire(path.join(dirPath,'/enable.js'))
      if (typeof enable !== 'boolean') enable = false
    } catch (err) {
      enable = false
    }
    return enable
  },
  getProxyEnable(){
    return this.getEnable(proxyDirPath)
  },
  getMockEnable(){
    return this.getEnable(apiDirPath)
  },
  getMocks() {
    let proxyUrls = Object.keys(this.getProxyUrl())
    let proxyEnable = this.getProxyEnable()
    let mockEnable = this.getMockEnable()
    let mocks = []
    fs.readdirSync(apiDirPath).forEach(pathName => {
      if (pathName !== 'enable.js' && pathName !== 'index.js') {
        let content = this.pureRequire(path.join(apiDirPath,`/${pathName}`,'/index.js'))
        try {
          content.forEach(item => {
            item.isProxyApi = this.isProxy(item.url, proxyUrls) && proxyEnable
            if (item.enableMock && !item.isProxyApi && mockEnable) {
              mocks.push(item)
            }
          })
        } catch (err) { }
      }
    })
    return mocks
  }
}