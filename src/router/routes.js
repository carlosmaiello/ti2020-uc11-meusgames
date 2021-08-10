
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'games', component: () => import('pages/Games.vue') },
      { path: 'perfil', component: () => import('pages/Perfil.vue') },
    ]
  },
  {
    path: '/games',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: 'novo', component: () => import('pages/FormGame.vue') },
      { path: ':id/edit', component: () => import('pages/FormGame.vue') },
      { path: ':id', component: () => import('pages/GameDetalhes.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }      
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
