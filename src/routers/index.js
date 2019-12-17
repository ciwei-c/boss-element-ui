import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

/**
 * 路由
 */
const requireContext = (files) => {
  let routes = [];
  files.keys().forEach(key => {
    routes = routes.concat(files(key).default)
  })
  return routes
}

export default new Router({
  routes:requireContext(require.context("./modules", false, /.\.js$/))
});
