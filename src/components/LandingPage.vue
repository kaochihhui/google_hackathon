<template>
  <div class="LandingPage">
    <div class="fullpage-container">
      <div class="button-group">
        <button
          type="button"
          @click="moveTo(0)"
        >
          快樂
        </button>
        <button
          type="button"
          @click="moveTo(1)"
        >
          健康
        </button>
        <button
          type="button"
          @click="moveTo(2)"
        >
          走起來
        </button>
      </div>
      <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
        <div class="page-1 page"><Header /></div>
        <div class="page-2 page"><GridContent /></div>
        <div class="page-3 page"><Footer /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import GridContent from "./GridContent";
import Footer from "./Footer";
export default {
  name: "LandingPage",
  components: {
    Header,
    GridContent,
    Footer
  },
  data() {
    // var that = this;
    return {
      index: 0,
      opts: {
        start: 0,
        dir: "v",
        duration: 500
        // beforeChange: function(ele, current, next) {
        //   that.index = next;
        // },
        // afterChange: function(ele, current) {
        //   that.index = current;
        // }
      }
    };
  },
  methods: {
    moveTo: function(index) {
      this.$refs.fullpage.$fullpage.moveTo(index, true);
    }
  }
};
</script>

<style scoped lang="scss">
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .button-group {
    position: absolute;
    z-index: 1;
    right: 100px;
    top: 10px;
    button {
      display: inline-block;
      margin: 10px;
      color: #000;
      background: #fff;
      background: rgba(255, 255, 255, 0.5);
      -webkit-border-radius: 10px;
      border-radius: 10px;
      padding: 9px 18px;
      border: none;
      outline: none;
      &.active {
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
      }
    }
  }
}
</style>
