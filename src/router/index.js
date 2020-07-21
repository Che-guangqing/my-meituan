import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '../layout/default.vue'
import blankPage from '../layout/blank.vue'
import goodsList from '../page/goodsList.vue'
import Index from '../page/index.vue'
import ChangeCity from '../page/changeCity.vue'
import Login from '../page/login.vue'
import Register from '../page/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: defaultPage,
    redirect: '/index',
    children: [{
      path: 's/:name',
      name: 'goods',
      component: goodsList
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: ChangeCity
    }]
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
    children: [{
      path: 'login',
      name: 'login',
      component: Login
    }, {
      path: 'register',
      name: 'register',
      component: Register
    }]
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
