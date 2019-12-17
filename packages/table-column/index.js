import BossTableColumn from '../table/src/table-column';

/* istanbul ignore next */
BossTableColumn.install = function(Vue) {
  Vue.component(BossTableColumn.name, BossTableColumn);
};

export default BossTableColumn;
