import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
const requireContext = (files) => {
  let modules = {};
  files.keys().forEach(key => {
    modules[key.substring(2,key.length - 3)] = files(key).default
  })
  return modules
}

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules:requireContext(require.context("./modules", false, /.\.js$/))
})

export default store