const state = {
  connected: false,
  onlineUsers: []
}

const getters = {
  connected: state => state.connected,
  onlineUsers: state => state.onlineUsers
}

const mutations = {
  SOCKET_CONNECT (state) {
    state.connected = true
    this._vm.$socket.emit('authenticate', localStorage.getItem('token'))
  },
  SOCKET_DISCONNECT (state) {
    state.connected = false
  },
  SOCKET_AUTHENTICATED (state, userId) {

  },
  SOCKET_ONLINE_USERS (state, [onlineUsers]) {
    state.onlineUsers = onlineUsers
  }
}

const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}
