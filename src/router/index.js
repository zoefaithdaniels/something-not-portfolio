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
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: () => import( '../views/ResumeView.vue')
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: () => import( '../views/ProjectsView.vue')
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: () => import( '../views/SkillsView.vue')
  },
  {
    path: '/Testimonials',
    name: 'Testimonials',
    component: () => import( '../views/TestimonialsView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import( '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
