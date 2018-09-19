import { USER_REQUEST, USER_SUCCESS, USER_ERROR, AUTH_LOGOUT } from '../mutation-types'
import { LOADING, SUCCESS, ERROR } from '../status-types'
import auth from '@/authService'

const state = {
  user: null,
  status: null
}

const getters = {
  user: state => state.user
}

const actions = {
  fetchUser ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      commit(USER_REQUEST)
      auth.user().then(({ data }) => {
        commit(USER_SUCCESS, data.user)
        resolve()
      }).catch(err => {
        commit(USER_ERROR, err)
        dispatch(AUTH_LOGOUT)
      })
    })
  }
}

const mutations = {
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
