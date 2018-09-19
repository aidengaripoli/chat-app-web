import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import VueSocketIO from 'vue-socket.io-extended'
import socketio from 'socket.io-client'

import './assets/styles.scss'

// Vue.use(VueSocketIO, socketio('http://18.212.174.206:80', {
Vue.use(VueSocketIO, socketio('http://localhost', {
  reconnect: true,
  transports: ['websocket']
}), { store })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
