<template>
  <div id="app">
    <Navbar id="nav" />

    <div class="container">
      <div class="section">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },

  sockets: {
    connect () {
      this.$socket.emit('authenticate', localStorage.getItem('token'))
    },

    authenticated (data) {
      console.log(`Authenticated: ${data}`)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
