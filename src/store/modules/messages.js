const state = {
  messages: []
}

const getters = {

}

const actions = {
  sendMessage () {
    this._vm.$socket.emit('authenticate', localStorage.getItem('token'))
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
