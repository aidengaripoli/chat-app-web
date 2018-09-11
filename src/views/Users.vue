<template>
  <div class="users">
    <h1><strong>Online Users</strong></h1>
    <p v-for="(user, index) in onlineUsers" :key="index">
      {{ user.name }}
      <span v-show="user._id === me._id">(me)</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'users',

  computed: {
    onlineUsers () {
      return this.$store.getters['onlineUsers']
    },

    me () {
      return this.$store.getters['user']
    }
  }
}
</script>
