<template>
  <div>
    <p>
      <strong
        :style="connected === 'ONLINE' ? 'color: limegreen' : 'color: red'"
      >
        {{ connected }}
      </strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'connectionStatus',

  computed: {
    connected () {
      return this.$store.getters['connected'] ? 'ONLINE' : 'OFFLINE'
    }
  }
}
</script>
