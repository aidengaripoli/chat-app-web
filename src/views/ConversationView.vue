<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <p>conversation - {{ id }}</p>
      <Chat />
    </div>
  </div>
</template>

<script>
import Chat from '@/components/Chat'

export default {
  name: 'conversationView',

  props: ['id'],

  components: { Chat }
}
</script>
