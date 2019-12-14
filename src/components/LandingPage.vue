<template>
  <div class="LandingPage">
    <div class="container-fluid header">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <img
              src="https://media.giphy.com/media/dvOkTV0lBd1E07TIeA/giphy.gif"
              alt=""
            />
          </div>
          <div class="col-7">
            <div class="typewriter">
              <div class="typewriter-text">哈囉～<br>一起來運動吧～</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped lang="scss">
.LandingPage {
  .header {
    height: 100vh;
    background: url(https://blackrockdigital.github.io/startbootstrap-new-age/img/bg-pattern.png),
      linear-gradient(to left, #7b4397, #dc2430);
  }
  .typewriter {
    display: inline-block;
  }

  .typewriter-text {
    display: inline-block;
    overflow: hidden;
    letter-spacing: 2px;
    animation: typing 5s steps(50, end), blink 0.75s step-end infinite;
    white-space: nowrap;
    font-size: 60px;
    font-weight: 700;
    // border-right: 4px solid orange;
    box-sizing: border-box;
    color: #ffffff;
  }

  @keyframes typing {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
}
</style>
