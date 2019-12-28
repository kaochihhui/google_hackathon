<template>
  <div class="gridContent">
    <div class="container-fluid section">
      <div class="container text-center sectionHeader">
        <h1>脂肪出去! 健康進來! 大家跑起來!!!</h1>
        <p class="text-muted">~ 你所不知道的各種跑步姿勢 ~</p>
        <hr />
      </div>
      <div class="d-flex flex-row justify-content-around sectionGrid">
        <div class="d-flex flex-row justify-content-start">
          <div class="img-div">
            <img
              id="img1"
              class="iconImg"
              src="https://media.giphy.com/media/hqlrKCydiVohFh5Wmy/giphy.gif"
              alt=""
            />
          </div>
          <div class="img-div">
            <img
              id="img2"
              class="iconImg"
              src="https://media.giphy.com/media/kfS9eNvRsTVDXj7LDS/giphy.gif"
              alt=""
            />
          </div>
          <div class="img-div">
            <img
              id="img3"
              class="iconImg"
              src="https://media.giphy.com/media/cnKOUsxIfSKoIF8Z7c/giphy.gif"
              alt=""
            />
          </div>
          <div class="img-div">
            <img
              id="img4"
              class="iconImg"
              src="https://media.giphy.com/media/RjrAEcRPhuSKoJ7WRV/giphy.gif"
              alt=""
            />
          </div>
          <div class="img-div">
            <img
              id="img5"
              class="iconImg"
              src="https://media.giphy.com/media/Sqfdt2VRK7nHWSvE3n/giphy.gif"
              alt=""
            />
          </div>
          <div>
            <div class="img-div">
              <img
                id="img6"
                class="iconImg"
                src="https://media.giphy.com/media/mCgEW87gnWUD3cSWi3/giphy.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridContent",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.gridContent {
  .section {
    height: 100vh;
    background: linear-gradient(#fbc642, #ffc021);
    padding-top: 150px;
  }

  .sectionHeader {
    .text-muted {
      color: #6c757d !important;
    }
    hr {
      max-width: 100px;
      margin: 25px auto 0;
      border-width: 1px;
      border-color: rgba(34, 34, 34, 0.1);
    }
  }
  .sectionGrid {
    .iconImg {
      // position: absolute;
      width: 350px;
      margin-left: -150px;
    }
  }
  .img-div {
    width: 175px;
  }

  // #img1 {
  //   left: 0px;
  // }

  // #img2 {
  //   left: 200px;
  // }

  // #img3 {
  //   left: 400px;
  // }

  // #img4 {
  //   left: 600px;
  // }

  // #img5 {
  //   left: 800px;
  // }

  #img6 {
    margin-left: -25px;
  }
}
</style>
