<template>
  <div>
    <div v-if="currentConversationId" class="ca-chat">
      <div class="card ca-message-list">
        <div class="card-content">
          <Message
            v-for="(message, index) in messages"
            :key="index"
            :message="message"
          />
        </div>
      </div>

      <ComposeMessage @sendMessage="appendMessage" />
    </div>
    <div v-else>
      <div class="section ca-select-conversation">
        <p>No conversations selected.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Message from './Message'
import ComposeMessage from './ComposeMessage'

export default {
  name: 'chat',

  components: {
    Message,
    ComposeMessage
  },

  computed: {
    messages () {
      return this.$store.getters.getConversationById(this.currentConversationId).messages
    },

    currentConversationId () {
      return this.$store.getters.currentConversationId
    }
  },

  methods: {
    appendMessage (message) {
      this.messages.push(message)
    }
  }
}
</script>

<style>
.ca-chat {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.ca-message-list {
  flex: 1;
}

.ca-select-conversation {
  display: flex;
  justify-content: center;
}
</style>
