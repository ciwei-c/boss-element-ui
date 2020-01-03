import Popover from './src/main';
import directive from './src/directive';
/* istanbul ignore next */
Popover.install = function(Vue) {
  Vue.use(directive);
  Vue.component(Popover.name, Popover);
};
Popover.directive = directive;

export default Popover;
