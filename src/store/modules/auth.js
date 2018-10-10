import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  RESET_ERRORS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR
} from '../mutation-types'
import { LOADING, SUCCESS, ERROR } from '../status-types'
import auth from '@/authService'

const state = {
  token: localStorage.getItem('token') || null,
  status: null,
  user: null,
  errors: null
}

const getters = {
  isAuthenticated: state => !!state.token,
  isLoading: state => state.status === LOADING,
  authStatus: state => state.status,
  user: state => state.user,
  errors: state => state.errors
}

const actions = {
  login ({ commit, dispatch }, user) {
    return new Promise(resolve => {
      commit(AUTH_REQUEST)
      auth.login(user).then(({ data }) => {
        commit(AUTH_SUCCESS, data.token)
        dispatch('fetchUser').then(() => {
          resolve()
        })
      }).catch(err => {
        commit(AUTH_ERROR, err)
      })
    })
  },

  register ({ commit, dispatch }, details) {
    return new Promise(resolve => {
      commit(REGISTER_REQUEST)
      auth.register(details).then(({ data }) => {
        commit(REGISTER_SUCCESS, data.token)
        dispatch('fetchUser')
        resolve()
      }).catch(err => {
        commit(REGISTER_ERROR, err)
      })
    })
  },

  fetchUser ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      commit(USER_REQUEST)
      auth.user().then(({ data }) => {
        commit(USER_SUCCESS, data.user)
        dispatch('fetchConversations')
        resolve()
      }).catch(err => {
        commit(USER_ERROR, err)
        commit(AUTH_LOGOUT)
        reject(err)
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
    // state.status = SUCCESS
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

  [USER_REQUEST] (state) {
    state.status = LOADING
  },

  [USER_SUCCESS] (state, user) {
    state.status = SUCCESS
    state.user = user
  },

  [USER_ERROR] (state, errors) {
    state.status = ERROR
    state.errors = errors
  },

  [REGISTER_REQUEST] (state) {
    state.status = LOADING
  },

  [REGISTER_SUCCESS] (state, token) {
    // state.status = SUCCESS
    state.token = token
  },

  [REGISTER_ERROR] (state, errors) {
    state.status = ERROR
    state.errors = errors
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
