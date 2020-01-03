<template>
  <li
    class="boss-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'boss-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'boss-element-ui/src/mixins/emitter';

  export default {
    name: 'BossDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('BossDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
