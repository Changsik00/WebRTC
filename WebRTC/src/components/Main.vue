<template>
    <div>
        <div> test test </div>
        this is main<br> this is main
    </div>
</template>

<script>
// import io from 'socket.io-client';
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    const socket = io("http://localhost:3000");
    socket.on("connect", function() {
      console.log("#@# connect");

      socket.emit("chat message", 'this is test');
      
    });
    socket.on("disconnect", function() {});

    socket.on('chat message', function(msg){
      console.log("#@# client chat message : " , msg);
    });

  }
};
</script>

<style lang="scss">
</style>
