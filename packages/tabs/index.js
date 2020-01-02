import BossTabs from './src/tabs';

/* istanbul ignore next */
BossTabs.install = function(Vue) {
  Vue.component(BossTabs.name, BossTabs);
};

export default BossTabs;
