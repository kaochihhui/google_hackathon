<template>
  <div class="footer">
    <div class="container-fluid section">
      <div class="sectionHeader">
        <h2>看那麼多，還不趕快下載起來!</h2>
      </div>
      <div class="iconSection">
        <img
          class="iconDownload"
          src="https://blackrockdigital.github.io/startbootstrap-new-age/img/app-store-badge.svg"
          alt=""
        />
        <img
          class="iconDownload"
          src="https://blackrockdigital.github.io/startbootstrap-new-age/img/google-play-badge.svg"
          alt=""
        />
      </div>
      <div class="socialMediaSection">
        <h4>喜歡我們記得訂閱、按讚、分享，還要開啟小鈴鐺喔～</h4>
        <a href="https://www.facebook.com/StretchApp/" target="_blank">
          <img class="socialMediaIcon" src="../assets/social_media_icon.png" />
        </a>
      </div>
    </div>
    <div class="container-fluid sectionFooter">
      <p>© 健康進來 2019. All Rights Reserved.</p>
      <ul class="list-inline">
        <li class="list-inline-item">
          <a class="listText" href="#">Privacy</a>
        </li>
        <li class="list-inline-item">
          <a class="listText" href="#">Terms</a>
        </li>
        <li class="list-inline-item">
          <a class="listText" href="#">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.footer {
  .section {
    height: 50vh;
    background: #0000009c;
    padding-top: 50px;
    text-align: center;
    color: #ffffff;
    .sectionHeader {
      margin-bottom: 30px;
    }
    .iconSection {
      .iconDownload {
        width: 200px;
      }
    }
    .socialMediaSection {
      margin-top: 30px;
      .socialMediaIcon{
        width: 250px;
        margin-top: 20px;
      }
    }
  }
  .sectionFooter {
    padding: 20px 0;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
    background-color: #222;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
    p {
      margin-bottom: 0;
    }
    .list-inline {
      margin-bottom: 0;
    }
    .listText {
      color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
