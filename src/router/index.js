import { createRouter, createWebHistory } from 'vue-router'
import IntroView from "@/views/IntroView.vue"

const routes = [
  { path: '/',           name: 'Intro', component: IntroView                             },
  { path: '/main/:lang', name: 'Main',  component: () => import('../views/MainView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
