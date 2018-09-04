<template>
  <div>
    <span class="tag is-rounded">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'message',

  props: ['message']
}
</script>
