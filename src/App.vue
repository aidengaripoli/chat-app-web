<template>
  <div id="app">
    <ConnectionStatus />
    <router-view/>
  </div>
</template>

<script>
import ConnectionStatus from '@/components/ConnectionStatus'

export default {
  name: 'app',

  components: { ConnectionStatus }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
