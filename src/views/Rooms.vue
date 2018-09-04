<template>
  <div class="home">
    <div class="columns is-multiline">
      <div class="column is-3">
        <Room />
      </div>
    </div>
  </div>
</template>

<script>
import Room from '@/components/Room'

export default {
  name: 'rooms',

  components: { Room },

  data () {
    return {}
  }
}
</script>
