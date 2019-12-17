import Vue from 'vue'
import App from './App.vue'
import router from "@/routers"
// import router from './router'
// import '../styles/index.scss'

Vue.config.productionTip = false

import BossElementUI from "boss-element-ui/src"
import "boss-element-ui/packages/theme-chalk/src/index.scss"

Vue.use(BossElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
