import {
  RESET_ERRORS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../mutation-types'
import { LOADING, SUCCESS, ERROR } from '../status-types'
import auth from '@/authService'

const state = {
  token: localStorage.getItem('token') || null,
  status: null,
  errors: null
}

const getters = {
  isLoading: state => state.status === LOADING,
  authStatus: state => state.status,
  errors: state => state.errors
}

const actions = {
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

  resetErrors ({ commit }) {
    commit(RESET_ERRORS)
  }
}

const mutations = {
  [REGISTER_REQUEST] (state) {
    state.status = LOADING
  },

  [REGISTER_SUCCESS] (state, token) {
    state.status = SUCCESS
    state.token = token
  },

  [REGISTER_ERROR] (state, errors) {
    state.status = ERROR
    state.errors = errors
    state.token = null
  },

  [RESET_ERRORS] (state) {
    state.errors = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
