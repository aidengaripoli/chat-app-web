<template>
  <div class="ca-connection-status" :class="statusClass">
    <p>
      <strong class="ca-connection-status-text">
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
    },

    statusClass () {
      return this.$store.getters['connected']
        ? 'ca-connection-status-online'
        : 'ca-connection-status-offline'
    }
  }
}
</script>

<style>
.ca-connection-status {
  display: flex;
  justify-content: center;
}

.ca-connection-status-text {
  color: #FFF;
}

.ca-connection-status-online {
  background-color: limegreen;
}

.ca-connection-status-offline {
  background-color: red;
}
</style>
