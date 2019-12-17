import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

/**
 * 路由
 */

export const routes = [{
  path: '/button',
  component: () => import('@/views/button.vue')
},{
  path: '/input',
  component: () => import('@/views/input.vue')
},{
  path: '/checkbox',
  component: () => import('@/views/checkbox.vue')
},{
  path: '/date-picker',
  component: () => import('@/views/date-picker.vue')
},{
  path: '/time-picker',
  component: () => import('@/views/time-picker.vue')
},{
  path: '/date-time-picker',
  component: () => import('@/views/date-time-picker.vue')
},{
  path: '/select',
  component: () => import('@/views/select.vue')
},{
  path: '/table',
  component: () => import('@/views/table.vue')
},{
  path: '/tag',
  component: () => import('@/views/tag.vue')
}];

export default new Router({
  routes
});
