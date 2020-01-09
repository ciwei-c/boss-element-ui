import Vue from 'vue'
import App from './App.vue'
import router from "@/routers"
import store from "@/store"
import "@/style/index.scss"

import "@/utils/global"
import "@/utils/load-theme"

Vue.config.productionTip = false

import BossElementUI from "boss-element-ui/src"

Vue.use(BossElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

