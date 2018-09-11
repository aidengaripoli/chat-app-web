import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT, RESET_ERRORS } from '../mutation-types'
import { LOADING, SUCCESS, ERROR } from '../status-types'
import auth from '@/auth'

const state = {
  token: localStorage.getItem('token') || null,
  status: null,
  errors: null
}

const getters = {
  isAuthenticated: state => !!state.token,
  isLoading: state => state.status === LOADING,
  authStatus: state => state.status,
  errors: state => state.errors
}

const actions = {
  login ({ commit, dispatch }, user) {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      auth.login(user).then(({ data }) => {
        commit(AUTH_SUCCESS, data.token)
        dispatch('fetchUser')
        resolve()
      }).catch(err => {
        commit(AUTH_ERROR, err)
      })
    })
  },

  logout ({ commit }) {
    commit(AUTH_LOGOUT)
    this._vm.$socket.disconnect()
  },

  resetErrors ({ commit }) {
    commit(RESET_ERRORS)
  }
}

const mutations = {
  [AUTH_REQUEST] (state) {
    state.status = LOADING
  },

  [AUTH_SUCCESS] (state, token) {
    state.status = SUCCESS
    state.token = token
  },

  [AUTH_ERROR] (state, errors) {
    state.status = ERROR
    state.errors = errors
  },

  [AUTH_LOGOUT] (state) {
    state.status = null
    state.errors = null
    state.token = null
  },

  [RESET_ERRORS] (state) {
    state.errors = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
