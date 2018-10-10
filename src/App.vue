<template>
  <div id="app">
    <ConnectionStatus v-show="$route.name === 'home'" />
    <router-view/>
  </div>
</template>

<script>
import ConnectionStatus from '@/components/ConnectionStatus'

export default {
  name: 'app',

  mounted () {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch('fetchUser').then(() => {
        this.$store.dispatch('fetchConversations')
      }).catch(() => {
        this.$router.push({ name: 'login' })
      })
    }
  },

  components: { ConnectionStatus }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
