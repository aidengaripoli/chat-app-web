<template>
  <div>
    <template v-if="currentConversationId">
      <div class="box">
        <Message
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
        />
      </div>

      <!-- <p v-show="usersTyping"
        v-for="(user, index) in usersTyping"
        :key="index"
      >
        {{ user.username }} is typing...
      </p> -->

      <ComposeMessage @sendMessage="appendMessage" />
    </template>
    <div v-else>
      <p>Select a Conversation</p>
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
      return this.$store.getters.getConversationById(this.currentConversationId)
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
