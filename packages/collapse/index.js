import BossCollapse from './src/collapse';

/* istanbul ignore next */
BossCollapse.install = function(Vue) {
  Vue.component(BossCollapse.name, BossCollapse);
};

export default BossCollapse;

