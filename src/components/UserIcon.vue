<template>
  <div>
    <h1 class="title is-4 ca-user-name">
      {{ user.name | capitalize }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'userIcon',

  props: ['user']
}
</script>

<style>
.ca-user-name {
  color: white !important;
  cursor: pointer;
  margin-bottom: 20px;
}

.ca-user-name:hover {
  background-color: #a6c1ff;
}
</style>
