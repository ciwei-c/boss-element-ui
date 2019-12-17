let Mock = require('mockjs');
let enable = require('./enable');
let proxyEnable = require('../proxy/enable');
let proxys = require('../proxy');
let allApis = {};
if (enable) {
  const isProxy = url => {
    let proxyUrls = Object.keys(proxys);
    for (let i = 0; i < proxyUrls.length; i++) {
      let proxyUrl = proxyUrls[i];
      if (url.startsWith(proxyUrl + '/') || url === proxyUrl) return true;
    }
    return false;
  };
  const handleApis = requireContext => {
    requireContext.keys().forEach(k => {
      try {
        let module = k.split('/')[1];
        let moduleContent = requireContext(k);
        if (Array.isArray(moduleContent)) {
          allApis[module] = moduleContent.map(
            ({ url, method, data, enableMock }) => {
              if (!(isProxy(url) && proxyEnable) && enableMock) {
                Mock.mock(url, method, Mock.mock(data));
              }
              return { url, method };
            }
          );
        }
      } catch (err) {
        delete require.cache[k];
      }
    });
  };
  handleApis(require.context('./', true, /\.\/\w+\/\w+\.js/));
}
export default allApis;
