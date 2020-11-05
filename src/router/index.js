import Vue from 'vue'
import VueRouter from 'vue-router'
import Blogs from '@/views/blogs'
import Index from '@/views/index'
import About from '@/views/about'
import Detail from '@/views/detail'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/home',
    component:Blogs,
  },
  {
    path:'/index',
    component:Index,
  },
  {
    path:'/about',
    component:About,
  },
  {
    path:'/detail/:id',
    component:Detail,
    props:true,
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
