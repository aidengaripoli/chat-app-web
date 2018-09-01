<template>
  <div class="home">
    <div class="name" v-show="!showChat">
      <h2>enter username:</h2>
      <input type="text" v-model="username" @keyup.enter="addUser">
      <button @click="addUser">Enter Chat</button>
    </div>
    <div class="chat" v-show="showChat">
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          {{ message.username }}: {{ message.body }}
        </li>
      </ul>
      <p v-show="usersTyping"
        v-for="(user, index) in usersTyping"
        :key="index"
      >
        {{ user.username }} is typing...
      </p>
      <input type="text" v-model="newMessage" @keydown="startTyping">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      username: '',
      showChat: false,
      newMessage: '',
      messages: [],
      users: [],
      usersTyping: {},
      isTyping: false
    }
  },

  sockets: {
    connect () {
      console.log('Socket connected.')
    },

    message ({ user, message }) {
      console.log(`Received: ${message} from ${user.username}`)
      this.messages.push({ username: user.username, body: message })
    },

    userJoined ({ user, userCount }) {
      this.users.push(user)
    },

    typing ({ user: typingUser }) {
      // see if the user is already typing
      // let index = this.usersTyping.findIndex(u => u.id === typingUser.id)
      let user = this.usersTyping[typingUser.id]

      // user isn't aready typing
      if (!user) {
        typingUser.typingTimer = null // set timer property on the user
        this.$set(this.usersTyping, typingUser.id, typingUser) // add user to the object of typing users
      }

      user = this.usersTyping[typingUser.id]

      if (user.typingTimer) clearTimeout(user.typingTimer)

      user.typingTimer = setTimeout(() => {
        this.$delete(this.usersTyping, typingUser.id)
      }, 3000)
    },

    stopTyping ({ user }) {
      this.usersTyping.splice(user.id, 1)
    }
  },

  methods: {
    sendMessage () {
      if (this.newMessage === '') { return }
      this.messages.push({ username: this.username, body: this.newMessage })
      this.$socket.emit('newMessage', this.newMessage)

      this.newMessage = ''
    },

    addUser () {
      this.showChat = true
      this.$socket.emit('addUser', this.username)
    },

    startTyping () {
      this.$socket.emit('typing')
    }
  }
}
</script>
