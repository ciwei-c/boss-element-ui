export default [{
  path: '/input',
  component: () => import('@/views/Form/input.vue')
},{
  path: '/input-number',
  component: () => import('@/views/Form/input-number.vue')
},{
  path: '/checkbox',
  component: () => import('@/views/Form/checkbox.vue')
},{
  path: '/date-picker',
  component: () => import('@/views/Form/date-picker.vue')
},{
  path: '/time-picker',
  component: () => import('@/views/Form/time-picker.vue')
},{
  path: '/date-time-picker',
  component: () => import('@/views/Form/date-time-picker.vue')
},{
  path: '/select',
  component: () => import('@/views/Form/select.vue')
}];