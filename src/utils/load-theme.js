import BossUI from "E:/workspace/boss-component/boss-element-ui/component/src";
import store from "@/store"
import Vue from "vue"

new Vue({
  computed:{
    theme(){
      return store.state.app.theme
    }
  },
  watch:{
    theme(){
      this.createLoading()
      window.location.reload()
    }
  },
  created(){
    if(this.theme === "ant") {
      require("@/style/ant-variables.scss")
    }else if(this.theme === "element"){
      require("@/style/element-variables.scss")
    }
  },
  methods:{
    createLoading(){
      let BossLoading = BossUI.BossLoading
      return BossLoading.service({
        lock: true,
        visible:false,
        text: 'Loading',
        spinner: 'boss-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  }
})