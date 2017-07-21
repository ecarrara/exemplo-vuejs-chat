<template>
  <div class="message-list">
    <h3>Mensagens</h3>
    <message v-for="(msg, i) in messages" :key="i" :message="msg"></message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  components: {
    Message
  },
  props: ['messages']
}
</script>

<style>
.message-list {
  width: 420px;
  margin: auto;
  background-color: white;
  padding: 25px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #fafafa;
  height: 400px;
  overflow-y: scroll;
}

.message-list h3 {
  margin: 0;
  margin-bottom: 15px;
}
</style>