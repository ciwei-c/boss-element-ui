<template>
  <transition name="msgbox-fade">
    <div
      class="boss-message-box__wrapper"
      tabindex="-1"
      v-show="visible"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'">
      <div class="boss-message-box" :class="[customClass, center && 'boss-message-box--center']">
        <div class="boss-message-box__header" v-if="title !== null">
          <div class="boss-message-box__title">
            <div
              :class="['boss-message-box__status', icon]"
              v-if="icon && center">
            </div>
            <span>{{ title }}</span>
          </div>
          <button
            type="button"
            class="boss-message-box__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')"
            @keydown.enter="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')">
            <i class="boss-message-box__close boss-icon-close"></i>
          </button>
        </div>
        <div class="boss-message-box__content">
          <div class="boss-message-box__container">
            <div
              :class="['boss-message-box__status', icon]"
              v-if="icon && !center && message !== ''">
            </div>
            <div class="boss-message-box__message" v-if="message !== ''">
              <slot>
                <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
                <p v-else v-html="message"></p>
              </slot>
            </div>
          </div>
          <div class="boss-message-box__input" v-show="showInput">
              <div class="boss-textarea" v-if="inputType === 'textarea'">
                <textarea 
                  v-model="inputValue"
                  ref="input"
                  type="text"
                  autocomplete="off" 
                  :placeholder="inputPlaceholder"
                  class="boss-textarea__inner">
                </textarea>
              </div>
              <div class="boss-input" v-else>
                <input
                  v-model="inputValue"
                  ref="input"
                  type="text"
                  @keydown.enter="handleInputEnter"
                  autocomplete="off" 
                  :placeholder="inputPlaceholder"
                  class="boss-input__inner"
                >
              </div>
            <div class="boss-message-box__errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="boss-message-box__btns" ref="btns"></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popup from 'boss-element-ui/src/utils/popup';
  import Locale from 'boss-element-ui/src/mixins/locale';
  import Vue from 'vue';
  import BossInput from 'boss-element-ui/packages/input';
  import BossButton from 'boss-element-ui/packages/button';
  import { addClass, removeClass } from 'boss-element-ui/src/utils/dom';
  import { t } from 'boss-element-ui/src/locale';
  import Dialog from 'boss-element-ui/src/utils/aria-dialog';
  import Components from "./components"

  let messageBox;
  let typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };

  export default {
    mixins: [Popup, Locale, Components],

    props: {
      modal: {
        default: true
      },
      lockScroll: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      closeOnHashChange: {
        default: true
      },
      center: {
        default: false,
        type: Boolean
      },
      roundButton: {
        default: false,
        type: Boolean
      }
    },

    components: {
      BossInput,
      BossButton
    },

    computed: {
      icon() {
        const { type, iconClass } = this;
        return iconClass || (type && typeMap[type] ? `boss-icon-${ typeMap[type] }` : '');
      },

      confirmButtonClasses() {
        return `boss-button--primary ${ this.confirmButtonClass }`;
      },
      cancelButtonClasses() {
        return `${ this.cancelButtonClass }`;
      }
    },

    methods: {
      getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },
      doClose() {
        if (!this.visible) return;
        this.visible = false;
        this._closing = true;

        this.onClose && this.onClose();
        messageBox.closeDialog(); // 解绑
        if (this.lockScroll) {
          setTimeout(this.restoreBodyStyle, 200);
        }
        this.opened = false;
        this.doAfterClose();
        setTimeout(() => {
          if (this.action) this.callback(this.action, this);
        });
      },

      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.handleAction(this.distinguishCancelAndClose ? 'close' : 'cancel');
        }
      },

      handleInputEnter() {
        if (this.inputType !== 'textarea') {
          return this.handleAction('confirm');
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        this.action = action;
        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
          this.beforeClose(action, this, this.close);
        } else {
          this.doClose();
        }
      },

      validate() {
        if (this.$type === 'prompt') {
          const inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || t('boss.messagebox.error');
            addClass(this.getInputElement(), 'invalid');
            return false;
          }
          const inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            const validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || t('boss.messagebox.error');
              addClass(this.getInputElement(), 'invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              addClass(this.getInputElement(), 'invalid');
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        removeClass(this.getInputElement(), 'invalid');
        return true;
      },
      getFirstFocus() {
        const btn = this.$el.querySelector('.boss-message-box__btns .boss-button');
        const title = this.$el.querySelector('.boss-message-box__btns .boss-message-box__title');
        return btn || title;
      },
      getInputElement() {
        const inputRefs = this.$refs.input
        return inputRefs
      },
      handleClose() {
        this.handleAction('close');
      }
    },

    watch: {
      showInput:{
        handler(val){
          if(val) this.$nextTick(()=>{
            setTimeout(() => {
              this.$refs.input.focus()
            });
          })
        },
        immediate:true
      },
      inputValue: {
        immediate: true,
        handler(val) {
          this.$nextTick(_ => {
            if (this.$type === 'prompt' && val !== null) {
              this.validate();
            }
          });
        }
      },

      visible(val) {
        if (val) {
          this.uid++;
          if (this.$type === 'alert' || this.$type === 'confirm') {
            this.$nextTick(() => {
              this.$refs.confirm.$el.focus();
            });
          }
          this.focusAfterClosed = document.activeElement;
          messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFirstFocus());
        }

        // prompt
        if (this.$type !== 'prompt') return;
        if (val) {
          setTimeout(() => {
            if (this.$refs.input && this.$refs.input.$el) {
              this.getInputElement().focus();
            }
          }, 500);
        } else {
          this.editorErrorMessage = '';
          removeClass(this.getInputElement(), 'invalid');
        }
      }
    },

    mounted() {
      this.$nextTick(() => {
        if (this.closeOnHashChange) {
          window.addEventListener('hashchange', this.close);
        }
      });
    },

    beforeDestroy() {
      if (this.closeOnHashChange) {
        window.removeEventListener('hashchange', this.close);
      }
      setTimeout(() => {
        messageBox.closeDialog();
      });
    },

    data() {
      return {
        uid: 1,
        btnsVisible:false,
        title: undefined,
        message: '',
        type: '',
        iconClass: '',
        customClass: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputType: 'text',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: '',
        cancelButtonText: '',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null,
        dangerouslyUseHTMLString: false,
        focusAfterClosed: null,
        isOnComposition: false,
        distinguishCancelAndClose: false
      };
    }
  };
</script>
