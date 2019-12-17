import BossOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
BossOptionGroup.install = function(Vue) {
  Vue.component(BossOptionGroup.name, BossOptionGroup);
};

export default BossOptionGroup;
