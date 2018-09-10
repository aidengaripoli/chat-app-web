import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import auth from './modules/auth'

import localStoragePlugin from './plugins/localStoragePlugin'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    auth
  },
  plugins: [localStoragePlugin],
  strict: debug
})
