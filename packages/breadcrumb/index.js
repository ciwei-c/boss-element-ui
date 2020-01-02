import BossBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
BossBreadcrumb.install = function(Vue) {
  Vue.component(BossBreadcrumb.name, BossBreadcrumb);
};

export default BossBreadcrumb;
