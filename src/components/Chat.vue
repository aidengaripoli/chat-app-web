<template>
  <div>
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

    <NewMessage @sendMessage="appendMessage" />
  </div>
</template>

<script>
import Message from './Message'
import NewMessage from './NewMessage'

export default {
  name: 'chat',

  components: { Message, NewMessage },

  data () {
    return {
      messages: []
    }
  },

  methods: {
    appendMessage (message) {
      this.messages.push(message)
    }
  }
}
</script>
