import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import store from './store/'

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
      path: '/conversations',
      name: 'conversations',
      component: () => import(/* webpackChunkName: "login" */ './views/Conversations.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/conversation/:id',
      name: 'conversation',
      props: true,
      component: () => import(/* webpackChunkName: "login" */ './views/ConversationView.vue'),
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
        store.dispatch('logout')
        next('/')
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['isAuthenticated'] || !localStorage.getItem('token')) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
