<template>
  <form class="chat-input" @submit.prevent="send">
    <input v-model="text" placeholder="Digite sua mensagem e aperte <Enter>..." />
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      text: ''
    }
  },
  methods: {
    send: function () {
      this.$emit('send', this.text)
      this.text = ''
    }
  }
}
</script>

<style>
.chat-input {
  width: 420px;
  margin: auto;
  background-color: white;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.chat-input input {
  width: 100%;
  padding: 15px;
  border: 0;
  transition: ease 200ms box-shadow;
}

.chat-input input:focus {
  outline: none;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.15);
}
</style>