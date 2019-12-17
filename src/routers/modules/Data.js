export default [{
  path: '/table',
  component: () => import('@/views/Data/table.vue')
},{
  path: '/tag',
  component: () => import('@/views/Data/tag.vue')
},{
  path: '/pagination',
  component: () => import('@/views/Data/pagination.vue')
}];