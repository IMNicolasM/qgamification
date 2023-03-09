export default {
  categories: {
    permission: 'igamification.categories.manage',
    activated: true,
    authenticated: true,
    path: '/gamification/categories/index',
    name: 'gamification.admin.categories',
    crud: import('@imagina/qgamification/_crud/categories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'igamification.cms.sidebar.adminGroup',
    icon: 'fa-light fa-gamepad-modern',
    subHeader: {
      refresh: true,
    }
  }
}
