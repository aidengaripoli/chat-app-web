<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Room #1
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>some room description</p>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/chatroom/1`" class="card-footer-item">Join</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'room'
}
</script>
