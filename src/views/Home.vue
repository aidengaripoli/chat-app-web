<template>
  <div class="columns is-mobile is-gapless ca-home">
    <Users class="column is-3" />
    <Conversations class="column is-4" />
    <Chat class="column is-5" />
  </div>
</template>

<script>
import Chat from '@/components/Chat'
import Users from '@/components/Users'
import Conversations from '@/components/Conversations'

export default {
  name: 'home',

  mounted () {
    this.$store.dispatch('selectConversation', null)
  },

  components: {
    Chat,
    Users,
    Conversations
  }
}
</script>

<style>
.ca-home {
  height: calc(100% - 24px); /* ConnectionStatus component has a height of 24px */
}
</style>
