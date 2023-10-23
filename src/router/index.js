import { createRouter, createWebHistory } from 'vue-router'
import List from "@/views/List";
import Create from "@/views/Create";

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/contact/:id',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
