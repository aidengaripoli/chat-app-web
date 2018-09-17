import axios from 'axios'

const state = {
  currentConversationId: null,
  conversations: {}
}

const getters = {
  currentConversationId: state => state.currentConversationId,
  conversations: state => state.conversations,
  getConversationById: state => id => state.conversations[id]
}

const actions = {
  fetchConversations ({ commit, dispatch }) {
    axios.get('http://localhost/conversations', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(({ data }) => {
      commit('CONVERSATION_SUCCESS', data)
    }).catch(err => {
      console.error(err)
    })
  },

  selectConversation ({ commit }, conversationId) {
    commit('CONVERSATION_SELECT', conversationId)
  },

  addMessageToConversation ({ commit }, message) {
    commit('CONVERSATION_ADD_MESSAGE', message)
  }
}

const mutations = {
  'CONVERSATION_SUCCESS' (state, conversations) {
    state.conversations = conversations
  },

  'CONVERSATION_SELECT' (state, conversationId) {
    state.currentConversationId = conversationId
  },

  'CONVERSATION_ADD_MESSAGE' (state, message) {
    state.conversations[message.conversationId].push(message)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
