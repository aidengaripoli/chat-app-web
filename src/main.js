import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import VueSocketIO from 'vue-socket.io-extended'
import socketio from 'socket.io-client'

import './assets/styles.scss'

Vue.use(VueSocketIO, socketio(process.env.VUE_APP_ROOT_API, {
  reconnect: true,
  transports: ['websocket']
}), { store })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
