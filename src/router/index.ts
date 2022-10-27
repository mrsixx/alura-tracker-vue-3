import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'tarefas',
    component: () => import('../views/Tarefas.vue'),
    meta:{
      icon: 'fas fa-tasks',
      label: 'Tarefas'
    }
  },
  {
    path: '/projetos',
    component: () => import('../views/Projetos.vue'),
    meta:{
      icon: 'fas fa-project-diagram',
      label: 'Projetos'
    },
    children: [
      {
        path: '',
        name: 'Projetos',
        component: () => import('../views/Projetos/Lista.vue')
      },
      {
        path: 'novo',
        name: 'Novo projeto',
        component: () => import('../views/Projetos/Formulario.vue'),
      },
      {
        path: ':id',
        name: 'Editar projeto',
        props: true,
        component: () => import('../views/Projetos/Formulario.vue'),
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;