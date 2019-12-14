<template>
  <div class="header">
    <div class="container-fluid headerContent">
      <div class="container d-flex">
        <div class="col-6 rightText">快快樂樂出遊去<br />身心健康跑起來</div>
        <div class="col-6">
          <div class="device">
            <img class="deviceImg" src="https://media.giphy.com/media/McmIm0EGUHlDlJQlPZ/giphy.gif" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.header {
  .headerContent {
    display: flex;
    align-items: center;
    height: 100vh;
    background: url(https://blackrockdigital.github.io/startbootstrap-new-age/img/bg-pattern.png),
      linear-gradient(to left, #7b4397, #dc2430);
  }

  .rightText {
    font-size: 60px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }

  .device {
    position: relative;
    width: 300px;
    height: 600px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(https://blackrockdigital.github.io/startbootstrap-new-age/device-mockups/iphone_6_plus/iphone_6_plus_white_port.png);
  }

  .deviceImg {
    position: absolute;
    left: -90px;
    top: 30px;
  }
}
</style>
