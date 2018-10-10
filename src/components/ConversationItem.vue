<template>
  <div class="card" :class="{ 'ca-selected-conversation': currentConversationId === id }">
    <div class="card-header">
      <p class="card-header-title ca-card-title">
        <span>
          {{ participantName | capitalize }}
        </span>
        <span v-if="latestMessage">
          {{ latestMessage.createdAt || Date.now() | sentAt }}
        </span>
      </p>
    </div>
    <div class="card-content">
      <div class="content">
        <p v-if="conversation.messages.length">
          <span>
            <strong>
              {{ latestMessage.user.name }}:
            </strong>
          </span>
          {{ latestMessage.body }}
        </p>
        <p v-else>
          No Messages.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  name: 'conversationItem',

  props: ['id', 'conversation'],

  computed: {
    currentConversationId () {
      return this.$store.getters.currentConversationId
    },

    user () {
      return this.$store.getters.user
    },

    participantName () {
      let participants = this.conversation.participants

      return participants[0]._id !== this.user._id
        ? participants[0].name
        : participants[1].name
    },

    latestMessage () {
      return this.conversation.messages[this.conversation.messages.length - 1]
    }
  },

  filters: {
    sentAt (timestamp) {
      return format(timestamp, 'd:h:mma')
    }
  }
}
</script>

<style>
.ca-selected-conversation {
  box-shadow: 1px 0 12px -5px grey;
  background-color: white !important;
}

.ca-card-title {
  display: flex;
  justify-content: space-between;
}
</style>
