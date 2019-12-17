import BossInput from './src/input';

/* istanbul ignore next */
BossInput.install = function(Vue) {
    Vue.component(BossInput.name, BossInput);
};

export default BossInput;