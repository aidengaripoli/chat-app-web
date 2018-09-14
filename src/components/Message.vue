<template>
  <div>
    <span>{{ message.user.name }}</span>
    <span class="tag is-rounded">{{ message.body }}</span>
  </div>
</template>

<script>
export default {
  name: 'message',

  props: ['message']
}
</script>
