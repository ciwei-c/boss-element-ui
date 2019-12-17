import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import '../styles/index.scss'

Vue.config.productionTip = false

import BosssoftUI from "bosssoft-ui/src"
import "bosssoft-ui/packages/theme-chalk/src/index.scss"

Vue.use(BosssoftUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
