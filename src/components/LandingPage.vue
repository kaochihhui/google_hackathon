<template>
  <div class="LandingPage">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
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
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500
        // beforeChange: function(currentSlideEl, currenIndex, nextIndex) {},
        // afterChange: function(currentSlideEl, currenIndex) {}
      }
    };
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
}
</style>
