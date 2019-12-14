<template>
  <div class="gridContent">
    <div class="container-fluid section">
      <div class="container text-center sectionHeader">
        <h1>脂肪出去! 健康進來! 大家跑起來!!!</h1>
        <p class="text-muted">~ 你所不知道的各種跑步姿勢 ~</p>
        <hr />
      </div>
      <div class="sectionGrid">
        <img
          id="img1"
          class="iconImg"
          src="https://media.giphy.com/media/dvOkTV0lBd1E07TIeA/giphy.gif"
          alt=""
        />
        <img
          id="img2"
          class="iconImg"
          src="https://media.giphy.com/media/Rhpk0e7gz0pcLWmppH/giphy.gif"
          alt=""
        />
        <img
          id="img3"
          class="iconImg"
          src="https://media.giphy.com/media/IyxwTfCk45lKm4cnqO/giphy.gif"
          alt=""
        />
        <img
          id="img4"
          class="iconImg"
          src="https://media.giphy.com/media/UQDf5KY2jSyMcLNcef/giphy.gif"
          alt=""
        />
        <img
          id="img5"
          class="iconImg"
          src="https://media.giphy.com/media/l16gMygmyFtDcyd0NK/giphy.gif"
          alt=""
        />
        <img
          id="img6"
          class="iconImg"
          src="https://media.giphy.com/media/kcTpdLpgRC3z8QG8JW/giphy.gif"
          alt=""
        />
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
    padding-top: 100px;
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
      position: absolute;
      width: 400px;
    }
  }

  #img1 {
    left: 0px;
  }

  #img2 {
    left: 200px;
  }

  #img3 {
    left: 400px;
  }

  #img4 {
    left: 600px;
  }

  #img5 {
    left: 800px;
  }

  #img6 {
    right: 0;
  }
}
</style>
