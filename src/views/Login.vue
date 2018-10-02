<template>
  <div class="columns is-mobile is-vcentered login-form">
    <div class="column is-6 is-offset-3">
      <div v-if="isLoading">
        <p>LOADING...</p>
      </div>
      <template v-else>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  v-model="email"
                  @keydown="resetErrors"
                  @keydown.enter="login"
                  class="input"
                  :class="{ 'is-danger': errors }"
                  type="text"
                  placeholder="email"
                >
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Password</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  v-model="password"
                  @keydown="resetErrors"
                  @keydown.enter="login"
                  class="input"
                  :class="{ 'is-danger': errors }"
                  type="password"
                  placeholder="Password"
                >
              </p>

              <p
                v-if="errors"
                v-for="(message, index) in errors"
                :key="index"
                class="help is-danger"
              >
                {{ message }}
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button
                  @click="login"
                  class="button is-primary is-fullwidth"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="control">
            <router-link to="/register" class="button is-text">Register</router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: mapGetters(['errors', 'isLoading']),

  methods: {
    login () {
      const { email, password } = this
      this.$store.dispatch('login', { email, password }).then(() => {
        this.$router.push({ name: 'home' })
        this.$socket.connect()
      })
    },

    resetErrors () {
      if (this.errors) {
        this.$store.dispatch('resetErrors')
      }
    }
  }
}
</script>

<style>
.login-form {
  height: 100vh;
}
</style>
