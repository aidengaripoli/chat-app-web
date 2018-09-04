<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control">
              <input
                v-model="username"
                @keydown="error = null"
                class="input"
                :class="{ 'is-danger': error }"
                type="text"
                placeholder="Username"
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
                @keydown="error = null"
                @keydown.enter="login"
                class="input"
                :class="{ 'is-danger': error }"
                type="password"
                placeholder="Password"
              >
            </p>

            <p v-if="error" class="help is-danger">Invalid credentials</p>
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
    </div>
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  name: 'login',

  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },

  methods: {
    login () {
      auth.login(this.username, this.password, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.push({ name: 'rooms' })
        }
      })
    }
  }
}
</script>
