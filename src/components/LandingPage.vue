<template>
  <div class="LandingPage">
    <Header/>
    <GridContent/>
    <Footer/>
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
  }
};
</script>

<style scoped lang="scss">
</style>
