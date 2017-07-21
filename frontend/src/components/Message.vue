<template>
  <div class="message">
    @{{ message.user }}: {{ message.text }}
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>
.message {
  border-bottom: 1px dotted #ccc;
  padding: 5px;
  margin-bottom: 10px;
  font-size: .95em;
}
</style>