<template>
  <div class="gesture">
    <button @click="testSignalR">Test SignalR</button>
  </div>
</template>

<script>
const signalR = require("@microsoft/signalr");

export default {
  name: "Gesture",
  props: {},
  data() {
    return {
      connection: null
    };
  },
  mounted() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("https://signalrservices.azurewebsites.net/messageHub")
      .build();

    this.connection.on("ReceiveMessage", function(user, message) {
      var msg = message
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      var encodedMsg = user + " says " + msg;
      var li = document.createElement("li");
      li.textContent = encodedMsg;
      // document.getElementById("messagesList").appendChild(li);
    });
    this.connection
      .start()
      .then(function() {
        alert("signalR start");
        // document.getElementById("sendButton").disabled = false;
      })
      .catch(function(err) {
        return err;
      });
  },
  methods: {
    testSignalR: function() {
      alert("click");
      const user = 1234;
      const message = 5678;
      this.connection.invoke("SendMessage", user, message).catch(function(err) {
        return err;
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
