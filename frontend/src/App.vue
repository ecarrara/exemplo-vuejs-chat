<template>
  <div id="app">
    <message-list :messages="messages"></message-list>
    <chat-input @send="sendMessage"></chat-input>
  </div>
</template>

<script>
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'

export default {
  components: {
    MessageList,
    ChatInput
  },
  created: function () {
    this.fetchMessages()
    this.startMessagesAutoUpdate()
  },
  methods: {
    sendMessage: function (msg) {
      this.$store.dispatch('send', msg)
    },
    fetchMessages: function () {
      this.$store.dispatch('fetch')
    },
    startMessagesAutoUpdate: function () {
      this.autoUpdateIntervalId = window.setInterval(() => {
        this.fetchMessages()
      }, 5000)
    },
    stopMessagesAutoUpdate: function () {
      window.clearInterval(this.autoUpdateIntervalId)
    }
  },
  computed: {
    messages: function () {
      return this.$store.state.messages
    }
  }
}
</script>

<style>
body, html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #fafafa;
}
form, div, input {
  box-sizing: border-box;
}
</style>