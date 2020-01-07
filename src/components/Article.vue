<template>
  <div class="article">
    <div class="container-fluid section">
      <div class="container text-center articleSection">
        <h1>痞客邦熱門健康資訊</h1>
        <div class="articleContent">
          <div
            v-for="data in articles"
            :key="data.id"
            class="d-flex text-center listArticle"
          >
            <img v-if="data.thumb" :src="data.thumb" class="thumbImg" />
            <div v-if="data.title" class="linkText">
              <a :href="data.link" target="_blank">{{ data.title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  props: {},
  data() {
    return {
      url:
        "http://emma.pixnet.cc/mainpage/blog/categories/hot/32?page=1&per_page=5&api_version=2&format=json",
      articles: [],
      posts: [],
      errors: []
    };
  },
  created() {
    axios
      .get(this.url)
      .then(response => {
        // JSON responses are automatically parsed.
        this.articles = response.data.articles;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.article {
  .section {
    height: 100vh;
    background: linear-gradient(#0fd6f9, #0fbcf9);
    padding-top: 100px;
  }
  .articleSection {
    width: 700px;
  }
  .articleContent {
    border: dashed 5px #e7e7e7;
    padding: 10px;
  }
  .thumbImg {
    width: 100px;
  }
  .listArticle {
    margin: 10px auto;
    justify-content: space-around;
    &:not(:first-child) {
      border-top: dashed 3px #e7e7e7;
      padding-top: 10px;
    }
  }
  .linkText {
    padding: 10px;
    text-align: left;
    width: 500px;
    align-self: center;
    a {
      color: #273b6e;
      
    }
  }
}
</style>
