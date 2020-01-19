<template>
  <button
    class="boss-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'boss-button--' + type : '',
      buttonSize ? 'boss-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-ghost': ghost,
        'is-default-color':!type || type === 'default' || type === 'dashed'
      }
    ]"
  >
    <i class="boss-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import Wave from "boss-element-ui/src/mixins/wave";
export default {
  name: "BossButton",
  mixins: [Wave],
  inject: {
    bossForm: {
      default: ""
    },
    bossFormItem: {
      default: ""
    }
  },

  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    ghost: Boolean
  },

  computed: {
    _bossFormItemSize() {
      return (this.bossFormItem || {}).bossFormItemSize;
    },
    buttonSize() {
      return this.size || this._bossFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.bossForm || {}).disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
      this.wave(this.$el);
    }
  }
};
</script>
