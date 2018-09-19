<template>
  <div>
    <template v-if="conversations">
      <ConversationItem
        v-for="(conversation, id) in conversations" :key="id"
        :conversation="conversation"
        @click.native="selectConversation(id)"
      />
    </template>
    <div v-else>
      <p>No Conversations.</p>
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
