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
            class={[this.confirmButtonClasses]}
            round={this.roundButton}
            size="small"
            onclick={() => this.handleAction('confirm')}
            onkeydown={() => this.handleAction('confirm')}>
            {this.confirmButtonText || t('boss.messagebox.confirm')}
          </boss-button> : null
      ))
    },
    cancelBtnComponent() {
      return this.getVueComponent((
        this.showCancelButton ? null :
          <boss-button
            loading={this.cancelButtonLoading}
            ref="cancel"
            class={[this.cancelButtonClasses]}
            round={this.roundButton}
            size="small"
            onclick={() => this.handleAction('cancel')}
            onkeydown={() => this.handleAction('cancel')}>
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