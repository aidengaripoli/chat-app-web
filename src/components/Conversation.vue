<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Conversation #1
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>some conversation description</p>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/chatroom/1`" class="card-footer-item">Join</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'conversation'
}
</script>
