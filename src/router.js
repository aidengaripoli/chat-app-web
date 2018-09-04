import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import auth from './auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import(/* webpackChunkName: "login" */ './views/Rooms.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/chatroom/:id',
      name: 'chatroom',
      props: true,
      component: () => import(/* webpackChunkName: "login" */ './views/ChatRoom.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "about" */ './views/Users.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
