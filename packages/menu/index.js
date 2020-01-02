import BossMenu from './src/menu';

/* istanbul ignore next */
BossMenu.install = function(Vue) {
  Vue.component(BossMenu.name, BossMenu);
};

export default BossMenu;
