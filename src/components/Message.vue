<template>
  <div>
    <div v-if="message.user._id === user._id" class="ca-message">
      <span class="tag is-rounded">{{ message.body }}</span>
    </div>
    <div v-else>
      <span>{{ message.user.name }}</span>
      <span class="tag is-rounded">{{ message.body }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',

  props: ['message'],

  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style>
.ca-message {
  display: flex;
  justify-content: flex-end;
}
</style>
