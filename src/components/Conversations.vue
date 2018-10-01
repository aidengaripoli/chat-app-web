<template>
  <div class="ca-conversation-list">
    <template v-if="Object.keys(conversations).length !== 0">
      <ConversationItem
        v-for="(conversation, id) in conversations" :key="id"
        :conversation="conversation"
        :id="id"
        @click.native="selectConversation(id)"
      />
    </template>
    <div v-else>
      <div class="section ca-no-conversations">
        <p>No conversations.</p>
      </div>
    </div>
  </div>
</template>

<script>
import ConversationItem from '@/components/ConversationItem'

export default {
  name: 'conversations',

  components: { ConversationItem },

  created () {
    this.$store.dispatch('fetchConversations')
  },

  computed: {
    conversations () {
      return this.$store.getters['conversations']
    }
  },

  methods: {
    selectConversation (conversationId) {
      this.$store.dispatch('selectConversation', conversationId)
    }
  }
}
</script>

<style>
.ca-conversation-list {
  /* border-right: 1px solid grey; */
  /* box-shadow: -2px 0px 14px 0px rgba(164,164,164,0.75); */
  box-shadow: 2px 0px 8px -4px rgba(164,164,164,0.75);
  background-color: #f4f6fb;
}

.ca-no-conversations {
  display: flex;
  justify-content: center;
}
</style>
