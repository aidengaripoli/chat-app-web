import {
  CONVERSATION_REQUEST,
  CONVERSATION_SUCCESS,
  CONVERSATION_ERROR,
  CONVERSATION_SELECT,
  CONVERSATION_ADD_MESSAGE,
  CONVERSATION_CREATED,
  CONVERSATION_ADD
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
  fetchConversations ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(CONVERSATION_REQUEST)
      conversationService.all().then(({ data }) => {
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
  },

  createConversation ({ commit, getters, dispatch }, userId) {
    const { conversations, user } = getters

    if (userId === user._id) {
      // cant have a conversation with yourself
      return
    }

    for (let key in conversations) {
      let participantIds = []
      for (let participant of conversations[key].participants) {
        participantIds.push(participant._id)
      }

      if (participantIds.includes(user._id) && participantIds.includes(userId)) {
        // conversation already exists
        dispatch('selectConversation', key)
        return
      }
    }

    conversationService.create([userId]).then(({ data }) => {
      commit(CONVERSATION_CREATED, data)
      commit(CONVERSATION_ADD, data)
    }).catch(err => {
      console.log(err)
    })
  },

  addNewConversation ({ commit }, conversation) {
    commit(CONVERSATION_ADD, conversation)
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
    state.conversations[message.conversationId].messages.push(message)
  },

  CONVERSATION_CREATED (state, conversation) {
    this._vm.$socket.emit('new_conversation', conversation)
  },

  CONVERSATION_ADD (state, conversation) {
    this._vm.$set(state.conversations, conversation._id, {
      participants: conversation.participants,
      messages: []
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
