<template>
  <div>
    <ConnectionStatus />

    <div class="columns is-mobile">
      <div class="column is-3">
        <Users />
      </div>

      <Conversations class="column is-3" />

      <div class="column is-6">
        <Chat />
      </div>
    </div>
  </div>
</template>

<script>
import Chat from '@/components/Chat'
import Users from '@/components/Users'
import Conversations from '@/components/Conversations'
import ConnectionStatus from '@/components/ConnectionStatus'

export default {
  name: 'home',

  components: {
    Chat,
    Users,
    Conversations,
    ConnectionStatus
  }
}
</script>
