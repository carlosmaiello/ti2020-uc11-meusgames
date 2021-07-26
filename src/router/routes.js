
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'games', component: () => import('pages/Games.vue') },
      { path: 'perfil', component: () => import('pages/Perfil.vue') },
      { path: 'games/detalhes', component: () => import('pages/GameDetalhes.vue') },
      { path: 'games/novo', component: () => import('pages/FormGame.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
