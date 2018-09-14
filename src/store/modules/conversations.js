import axios from 'axios'

const state = {
  currentConversationId: null,
  conversations: {}
}

const getters = {
  currentConversationId: state => state.currentConversationId,
  conversations: state => state.conversations,
  // getConversationById: state => id => {
  //   return state.conversations.find(c => c._id === id)
  // }
  getConversationById: state => id => state.conversations[id]
}

const actions = {
  fetchConversations ({ commit, dispatch }) {
    axios.get('http://localhost/conversations', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(({ data }) => {
      commit('CONVERSATION_SUCCESS', data)
    }).catch(err => {
      console.error(err)
    })
  },

  selectConversation ({ commit }, conversationId) {
    commit('CONVERSATION_SELECT', conversationId)
  }
}

const mutations = {
  'CONVERSATION_SUCCESS' (state, conversations) {
    state.conversations = conversations
  },

  'CONVERSATION_SELECT' (state, conversationId) {
    state.currentConversationId = conversationId
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
