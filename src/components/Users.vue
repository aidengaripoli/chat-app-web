<template>
  <div class="users">
    <section class="section">
      <UserIcon
        v-for="(user, index) in onlineUsers"
        :key="index"
        :user="user"
        @dblclick.native="createConversation(user._id)"
      />
    </section>
  </div>
</template>

<script>
import UserIcon from '@/components/UserIcon'

export default {
  name: 'users',

  components: {
    UserIcon
  },

  computed: {
    onlineUsers () {
      return this.$store.getters['onlineUsers']
    }
  },

  methods: {
    createConversation (userId) {
      this.$store.dispatch('createConversation', userId)
    }
  }
}
</script>

<style>
.users {
  height: 100%;
  background-color: #6895fc;
}
</style>
