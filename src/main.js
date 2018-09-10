import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client'

import './assets/styles.scss'

Vue.use(VueSocketIO, socketio('http://localhost:80', {
  reconnect: true,
  transports: ['websocket']
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
