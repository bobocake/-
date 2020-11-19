import Vue from 'vue'
import VueRouter from 'vue-router'

//项目实践
import Home from '../views/Home.vue'
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Historys from '../views/Historys.vue';
import History2 from '../views/History2.vue';
import Shopcar from '../views/Shopcar.vue';
import Message from '../views/Message.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Settlement from '../views/Settlement.vue';


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/settlement',
    component:Settlement
  },
  {
    path:'/productdetail',
    component:ProductDetail
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/historys',
    component:Historys
  },
  {
    path:'/history2',
    component:History2
  },
  {
    path:'/shopcar',
    component:Shopcar
  },
  {
    path:'/message',
    component:Message
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
