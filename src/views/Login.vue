<template>
  <div class="columns">
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

              <p v-if="errors" class="help is-danger">Invalid credentials</p>
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
        this.$router.push({ name: 'conversations' })
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
