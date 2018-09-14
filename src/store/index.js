import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import auth from './modules/auth'
import socket from './modules/socket'
import conversations from './modules/conversations'

import createdPersistedState from 'vuex-persistedstate'
import localStoragePlugin from './plugins/localStoragePlugin'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    auth,
    socket,
    conversations
  },
  plugins: [
    localStoragePlugin,
    createdPersistedState()
  ],
  strict: debug
})
