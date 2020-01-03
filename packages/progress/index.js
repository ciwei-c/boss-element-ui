import BossProgress from './src/progress';

/* istanbul ignore next */
BossProgress.install = function(Vue) {
  Vue.component(BossProgress.name, BossProgress);
};

export default BossProgress;
