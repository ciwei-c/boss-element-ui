<template>
  <ul class="boss-select-group__wrap" v-show="visible">
    <li class="boss-select-group__title">{{ label }}</li>
    <li>
      <ul class="boss-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'bosssoft-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'BossOptionGroup',

    componentName: 'BossOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('BossOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('BossOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
