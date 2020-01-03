<template>
  <div class="boss-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`boss-collapse-content-${id}`"
      :aria-describedby ="`boss-collapse-content-${id}`"
    >
      <div
        class="boss-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`boss-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="boss-collapse-item__arrow boss-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <boss-collapse-transition>
      <div
        class="boss-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`boss-collapse-head-${id}`"
        :id="`boss-collapse-content-${id}`"
      >
        <div class="boss-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </boss-collapse-transition>
  </div>
</template>
<script>
  import BossCollapseTransition from 'boss-element-ui/src/transitions/collapse-transition';
  import Emitter from 'boss-element-ui/src/mixins/emitter';
  import { generateId } from 'boss-element-ui/src/utils/util';

  export default {
    name: 'BossCollapseItem',

    componentName: 'BossCollapseItem',

    mixins: [Emitter],

    components: { BossCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('BossCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('BossCollapse', 'item-click', this);
      }
    }
  };
</script>
