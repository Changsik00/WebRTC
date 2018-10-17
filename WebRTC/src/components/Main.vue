<template>
    <div style="padding: 50px">
        <h1> Test.</h1>
        <button @click="call()">call</button>
        <button @click="receive()">receive</button>

        <div>
          <p>메시지: {{ message }}</p>
        </div>
        
        <input v-model="message" placeholder="여기를 수정해보세요">
        

        <button @click="gotoNext">test</button>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      constraints: {
        audio: true,
        video: true
      },
      localStream: null,
      remoteStream: null
    };
  },
  mounted() {},
  methods: {
    gotoNext() {
      this.$router.push("/connect");
    },
    callerStream() {
      function handleSuccess(stream) {
        const video = document.querySelector("#localVideo");
      }
      const stream = navigator.mediaDevices.getUserMedia(this.constraints);
      this.localStream = stream;
      handleSuccess(stream);
    },
    call() {
      console.log("#@# call");
      const socket = io("http://localhost:3000");
      socket.on("connect", function() {
        socket.emit("call", "call-data");
      });

      this.callerStream();
    },
    receive() {
      console.log("#@# receive");
      const socket = io("http://localhost:3000");
      socket.on("connect", function() {
        socket.emit("receive", "receive-data");
        socket.on("conntect-webrtc", function(data) {
          console.log("#@# conntect-webrtc", data);
        });
      });
    }
  }
};
</script>
<style lang="scss">
</style>
