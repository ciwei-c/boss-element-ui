<template>
  <transition
    name="boss-drawer-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      class="boss-drawer__wrapper"
      tabindex="-1"
      v-show="visible">
      <div
        class="boss-drawer__container"
        :class="visible && 'boss-drawer__open'"
        @click.self="handleWrapperClick"
        role="document"
        tabindex="-1">
        <div
          aria-modal="true"
          aria-labelledby="boss-drawer__title"
          :aria-label="title"
          class="boss-drawer"
          :class="[direction, customClass]"
          :style="isHorizontal ? `width: ${size}` : `height: ${size}`"
          ref="drawer"
          role="dialog"
          tabindex="-1"
          >
          <header class="boss-drawer__header" id="boss-drawer__title" v-if="withHeader">
            <slot name="title">
              <span role="heading" tabindex="0" :title="title">{{ title }}</span>
            </slot>
            <button
              :aria-label="`close ${title || 'drawer'}`"
              class="boss-drawer__close-btn"
              type="button"
              v-if="showClose"
              @click="closeDrawer">
              <i class="boss-dialog__close boss-icon boss-icon-close"></i>
            </button>
          </header>
          <section class="boss-drawer__body" v-if="rendered">
            <slot></slot>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from 'boss-element-ui/src/utils/popup';
import emitter from 'boss-element-ui/src/mixins/emitter';
import Utils from 'boss-element-ui/src/utils/aria-utils';

export default {
  name: 'BossDrawer',
  mixins: [Popup, emitter],
  props: {
    appendToBody: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'rtl',
      validator(val) {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1;
      }
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '30%'
    },
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    },
    withHeader: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isHorizontal() {
      return this.direction === 'rtl' || this.direction === 'ltr';
    }
  },
  data() {
    return {
      closed: false,
      prevActiveElement: null
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
        this.prevActiveElement = document.activeElement;
        this.$nextTick(() => {
          Utils.focusFirstDescendant(this.$refs.drawer);
        });
      } else {
        if (!this.closed) this.$emit('close');
        this.$nextTick(() => {
          if (this.prevActiveElement) {
            this.prevActiveElement.focus();
          }
        });
      }
    }
  },
  methods: {
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        if (this.destroyOnClose === true) {
          this.rendered = false;
        }
        this.closed = true;
      }
    },
    handleWrapperClick() {
      if (this.wrapperClosable) {
        this.closeDrawer();
      }
    },
    closeDrawer() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    handleClose() {
      // This method here will be called by PopupManger, when the `closeOnPressEscape` was set to true
      // pressing `ESC` will call this method, and also close the drawer.
      // This method also calls `beforeClose` if there was one.
      this.closeDrawer();
    }
  },
  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
