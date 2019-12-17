import BossTable from './src/table';

/* istanbul ignore next */
BossTable.install = function(Vue) {
  Vue.component(BossTable.name, BossTable);
};

export default BossTable;
