import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('../views/CardsView.vue')
  },
  {
    path: '/card/:id',
    name: 'card',
    component: () => import('../views/CardView.vue')
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/LocationsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
