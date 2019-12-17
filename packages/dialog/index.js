import BossDialog from './src/component';

/* istanbul ignore next */
BossDialog.install = function(Vue) {
  Vue.component(BossDialog.name, BossDialog);
};

export default BossDialog;
