import BossDownload from './src/main';

/* istanbul ignore next */
BossDownload.install = function(Vue) {
  Vue.component(BossDownload.name, BossDownload);
};

export default BossDownload;
