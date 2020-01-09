import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const DemoRender = () => import('@/components/DemoRender')
/**
 * 路由
 */
const requireContext = (files) => {
  let routes = [];
  files.keys().forEach(key => {
    routes = routes.concat(files(key).default)
  })
  routes = routes.map(route=>{
    if(!route.component) route.component = DemoRender
    return route
  })
  routes.push({
    path:"/",
    redirect:"/layout"
  })
  return routes
}

export default new Router({
  routes:requireContext(require.context("./modules", false, /.\.js$/))
});
