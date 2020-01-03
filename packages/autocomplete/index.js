import BossAutocomplete from './src/autocomplete';

/* istanbul ignore next */
BossAutocomplete.install = function(Vue) {
  Vue.component(BossAutocomplete.name, BossAutocomplete);
};

export default BossAutocomplete;
