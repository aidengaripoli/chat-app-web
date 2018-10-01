<template>
  <div>
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          v-model="newMessage"
          @keydown="startTyping"
          @keydown.enter="sendMessage"
          class="input"
          type="text"
          placeholder="Send a message..."
        >
      </div>
      <div class="control">
        <button
          @click="sendMessage"
          class="button is-info"
          :disabled="sendButtonEnabled"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'composeMessage',

  data () {
    return {
      newMessage: ''
    }
  },

  computed: {
    sendButtonEnabled () {
      return this.newMessage === ''
    }
  },

  methods: {
    sendMessage () {
      if (this.newMessage.trim()) {
        let message = {
          conversationId: this.$store.getters.currentConversationId,
          body: this.newMessage
        }

        this.$socket.emit('send_message', message)
        this.$store.dispatch('addMessageToConversation', {
          ...message,
          user: this.$store.getters.user
        })

        this.newMessage = ''
      }
    },

    startTyping () {
      this.$socket.emit('typing', this.$store.getters.currentConversationId)
    }
  }
}
</script>
