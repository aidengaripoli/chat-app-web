<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/conversations">Conversations</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link v-if="isAuthenticated" to="/logout">Logout</router-link>
    <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',

  computed: mapGetters(['isAuthenticated'])
}
</script>
