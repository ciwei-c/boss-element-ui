import BossTag from './src/tag';

/* istanbul ignore next */
BossTag.install = function(Vue) {
  Vue.component(BossTag.name, BossTag);
};

export default BossTag;
