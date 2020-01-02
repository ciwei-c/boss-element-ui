import BossSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
BossSubmenu.install = function(Vue) {
  Vue.component(BossSubmenu.name, BossSubmenu);
};

export default BossSubmenu;
