let proxys = require("./index.json");
let enable = require("./enable");
if (!enable) proxys = {};
module.exports = proxys;
