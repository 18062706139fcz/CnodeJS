import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import User from '@/views/User'
import Topic from '@/views/Topic'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
