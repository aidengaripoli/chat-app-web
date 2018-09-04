<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <p>chat room - {{ id }}</p>
      <Chat />
    </div>
  </div>
</template>

<script>
import Chat from '@/components/Chat'

export default {
  name: 'chatRoom',

  props: ['id'],

  components: { Chat }
}
</script>
