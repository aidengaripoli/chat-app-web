<template>
  <div class="columns is-mobile is-vcentered register-form">
    <div class="column is-6 is-offset-3">
      <template>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  v-model="form.name"
                  @keydown="resetErrors"
                  @keydown.enter="register"
                  class="input"
                  :class="{ 'is-danger': errors }"
                  type="text"
                  placeholder="Name"
                  :disabled="isLoading"
                >
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  v-model="form.email"
                  @keydown="resetErrors"
                  @keydown.enter="register"
                  class="input"
                  :class="{ 'is-danger': errors }"
                  type="text"
                  placeholder="Email"
                  :disabled="isLoading"
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
                  v-model="form.password"
                  @keydown="resetErrors"
                  @keydown.enter="register"
                  class="input"
                  :class="{ 'is-danger': errors }"
                  type="password"
                  placeholder="Password"
                  :disabled="isLoading"
                >
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Confirm Password</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  v-model="form.passwordConfirm"
                  @keydown="resetErrors"
                  @keydown.enter="register"
                  class="input"
                  :class="{ 'is-danger': errors }"
                  type="password"
                  placeholder="Password"
                  :disabled="isLoading"
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
                  @click="register"
                  class="button is-primary is-fullwidth"
                  :class="{ 'is-loading': isLoading }"
                  :disabled="isLoading"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="control">
            <router-link to="/login" class="button is-text">Login</router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'register',

  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },

  computed: mapGetters(['errors', 'isLoading']),

  methods: {
    register () {
      this.$store.dispatch('register', this.$data.form).then(() => {
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
.register-form {
  height: 100vh;
}
</style>
