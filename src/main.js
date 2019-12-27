import Vue from 'vue'
import App from './App.vue'
import router from "@/routers"
import "@/style/index.scss"

import store from "@/store"

import "@/utils/global"

Vue.config.productionTip = false

import BossElementUI from "E:/workspace/boss-component/boss-element-ui/component/src"

Vue.use(BossElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
