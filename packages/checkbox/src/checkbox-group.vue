<script>
  import Emitter from '../../../src/mixins/emitter';

  export default {
    name: 'BossCheckboxGroup',

    componentName: 'BossCheckboxGroup',

    mixins: [Emitter],

    inject: {
      bossFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _bossFormItemSize() {
        return (this.bossFormItem || {}).bossFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._bossFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('BossFormItem', 'boss.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="boss-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
