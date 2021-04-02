import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Timeline',
    name: 'TimeLine',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
