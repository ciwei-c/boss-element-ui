import BossDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
BossDropdownMenu.install = function(Vue) {
  Vue.component(BossDropdownMenu.name, BossDropdownMenu);
};

export default BossDropdownMenu;
