<template>
  <div class="socketsample">
    <button @click="clickButton">Send some data</button>
  </div>
</template>
<script>
export default {
  mounted() {
    //this.$options.sockets.onmessage = data => console.log(data);
  },
  methods: {
    clickButton: function(val) {
      // $socket is [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) instance
      //this.$socket.send('some data');
      // or with {format: 'json'} enabled
      //this.$socket.sendObj({ awesome: 'data' });
    },
  },
};
</script>
