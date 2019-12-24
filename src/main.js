import Vue from 'vue'
import App from './App.vue'
import router from "@/routers"
import "@/style/index.scss"

import store from "@/store"

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

import BossElementUI from "E:/workspace/boss-component/boss-element-ui/component/src"
import "E:/workspace/boss-component/boss-element-ui/component/packages/theme-chalk/src/index.scss"

import DemoSamplePanel from "@/components/DemoSamplePanel"
Vue.component("demo-sample-panel",DemoSamplePanel)

Vue.use(BossElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
