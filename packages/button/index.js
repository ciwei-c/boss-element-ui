import BossButton from './src/button';

/* istanbul ignore next */
BossButton.install = function(Vue) {
  Vue.component(BossButton.name, BossButton);
};

export default BossButton;
