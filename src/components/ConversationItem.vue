<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ conversation[conversation.length - 1].user.name }} - {{ conversation[conversation.length - 1].body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conversationItem',

  props: ['conversation']
}
</script>
