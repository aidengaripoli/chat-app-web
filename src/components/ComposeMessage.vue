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
  name: 'newMessage',

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
      this.$emit('sendMessage', this.newMessage)
      this.newMessage = ''
    },

    startTyping () {
      // this.$socket.emit('typing')
    }
  }
}
</script>
