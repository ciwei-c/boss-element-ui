let proxyServer = require("./proxyServer")
let mockServer = require("./mockServer")
module.exports = app => {
    proxyServer(app)
    mockServer(app)
}