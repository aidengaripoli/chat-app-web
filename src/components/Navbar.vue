<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/rooms">Rooms</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link v-if="loggedIn" to="/logout">Logout</router-link>
    <router-link v-if="!loggedIn" to="/login">Login</router-link>
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  name: 'navbar',

  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
