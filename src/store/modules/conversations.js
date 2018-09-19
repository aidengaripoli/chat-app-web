import {
  CONVERSATION_REQUEST,
  CONVERSATION_SUCCESS,
  CONVERSATION_ERROR,
  CONVERSATION_SELECT,
  CONVERSATION_ADD_MESSAGE
} from '../mutation-types'
import conversationService from '@/conversationService'

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
    return new Promise((resolve, reject) => {
      commit(CONVERSATION_REQUEST)
      conversationService.all().then(({ data }) => {
        console.log(data)
        commit(CONVERSATION_SUCCESS, data)
        resolve()
      }).catch(err => {
        commit(CONVERSATION_ERROR, err)
      })
    })
  },

  selectConversation ({ commit }, conversationId) {
    commit(CONVERSATION_SELECT, conversationId)
  },

  addMessageToConversation ({ commit }, message) {
    commit(CONVERSATION_ADD_MESSAGE, message)
  }
}

const mutations = {
  CONVERSATION_REQUEST (state, conversations) {

  },

  CONVERSATION_SUCCESS (state, conversations) {
    state.conversations = conversations
  },

  CONVERSATION_ERROR (state, conversations) {

  },

  CONVERSATION_SELECT (state, conversationId) {
    state.currentConversationId = conversationId
  },

  CONVERSATION_ADD_MESSAGE (state, message) {
    state.conversations[message.conversationId].push(message)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
