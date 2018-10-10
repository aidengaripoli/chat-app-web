import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import socket from './modules/socket'
import conversations from './modules/conversations'

import localStoragePlugin from './plugins/localStoragePlugin'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    socket,
    conversations
  },
  plugins: [
    localStoragePlugin
  ],
  strict: debug
})
