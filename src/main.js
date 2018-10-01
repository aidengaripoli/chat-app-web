import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import VueSocketIO from 'vue-socket.io-extended'
import socketio from 'socket.io-client'
// import InstantSearch from 'vue-instantsearch'

import './assets/styles.scss'

// Vue.use(InstantSearch)
Vue.use(VueSocketIO, socketio(process.env.VUE_APP_ROOT_API, {
  reconnect: true,
  transports: ['websocket']
}), { store })

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
