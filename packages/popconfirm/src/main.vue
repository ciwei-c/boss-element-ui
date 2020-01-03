<template>
  <boss-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="boss-popconfirm">
    <p class="boss-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="boss-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="boss-popconfirm__action">
      <boss-button 
        size="mini" 
        :type="cancelButtonType" 
        @click="cancel"
      >
        {{cancelButtonText}}
      </boss-button>
      <boss-button 
        size="mini" 
        :type="confirmButtonType" 
        @click="confirm"
      >
        {{confirmButtonText}}
      </boss-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</boss-popover>
</template>

<script>
import BossPopover from 'boss-element-ui/packages/popover';
import BossButton from 'boss-element-ui/packages/button';
import {t} from 'boss-element-ui/src/locale';

export default {
  name: 'BossPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t('boss.popconfirm.confirmButtonText')
    },
    cancelButtonText: {
      type: String,
      default: t('boss.popconfirm.cancelButtonText')
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'boss-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BossPopover,
    BossButton
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
};
</script>
