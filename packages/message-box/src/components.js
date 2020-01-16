import Vue from "vue";
import { t } from 'boss-element-ui/src/locale';
export default {
  computed: {
    confirmBtnComponent() {
      return this.getVueComponent((
        this.showConfirmButton ?
          <boss-button
            loading={this.confirmButtonLoading}
            ref="confirm"
            class={[this.confirmButtonClasses,'is-confirm']}
            round={this.roundButton}
            size="small"
            onClick={() => this.handleAction('confirm')}
            onKeydown={() => this.handleAction('confirm')}>
            {this.confirmButtonText || t('boss.messagebox.confirm')}
          </boss-button> : null
      ))
    },
    cancelBtnComponent() {
      return this.getVueComponent((
        !this.showCancelButton ? null :
          <boss-button
            loading={this.cancelButtonLoading}
            ref="cancel"
            class={[this.cancelButtonClasses, 'is-cancel']}
            round={this.roundButton}
            size="small"
            onClick={() => this.handleAction('cancel')}
            onKeydown={() => this.handleAction('cancel')}>
            {this.cancelButtonText || t('boss.messagebox.cancel')}
          </boss-button>
      ))
    }
  },
  watch: {
    visible(val) {
      // btn、input
      if (val) {
        let { confirm, cancel, btns } = this.$refs
        if (!cancel) btns.appendChild(this.cancelBtnComponent)
        if (!confirm) btns.appendChild(this.confirmBtnComponent)
      }
    }
  },
  methods: {
    getVueComponent(template) {
      return new Vue({
        render() {
          return template
        }
      }).$mount().$el
    },
    onInput(v){
      this.inputValue = v
    }
  }
}