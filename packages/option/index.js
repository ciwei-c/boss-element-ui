import BossOption from '../select/src/option';

/* istanbul ignore next */
BossOption.install = function(Vue) {
  Vue.component(BossOption.name, BossOption);
};

export default BossOption;
