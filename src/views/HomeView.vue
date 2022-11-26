<template>
  <div class="container-home">
    <div class="left-nav item-main">
      <div class="first-polygon polygon"></div>
      <div class="second-polygon polygon"></div>
      <div class="third-polygon polygon"></div>
      <h1><pre>Про наш чудесный сайт
        по игре "Марвел Снап"</pre></h1>
      <pre>
        Здесь я расскажу подробнее про сайт и что мы будет тут показывать.

      Наш сайт очень классный. Очень. Реально очень. И это не пост-ирония.
      </pre>
    </div>
    <div class="right-contant item-main">
       <pre>

  Ничем непримечательный контент справа, который
  пока что не заполнен.
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>


<style scoped lang="scss">
.container-home {
  flex: 1;
  margin-top: 1rem;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  width: 95%;
  .left-nav {
    flex: 1;
    .polygon{
      background: inherit;
      position: absolute;
      z-index: 0;
      box-shadow: 0px 0px 78px 5px rgba(255, 255, 255, 0.5);
    }
    .first-polygon{
      top: -10px;
      left: -12px;
      width: 50px;
      height: 50px;
      clip-path: polygon(0% 0%, 100% 19%, 29% 100%, 0 0%); // TODO: backgdoung-gradient
    }
    .second-polygon{
      top: 46px;
      left: -24px;
      width: 87px;
      height: 100px;
      -webkit-clip-path: polygon(32% 29%, 84% 25%, 32% 100%, 4% 72%);
      clip-path: polygon(32% 29%, 84% 25%, 32% 100%, 4% 72%);
    }
    .third-polygon{
      top: 148px;
      left: -51px;
      width: 87px;
      height: 40px;
      -webkit-clip-path: polygon(70% 1%, 100% 51%, 7% 107%, 29% 72%);
      clip-path: polygon(70% 1%, 100% 51%, 7% 107%, 29% 72%);
    }
    .title {
      height: 5rem;
    }
    h1{
      margin: 1rem 0 0 1rem;
    }
  }
  .right-contant {
    margin-left: 1rem;
  }
  .item-main{
    position: relative;
    border-radius: 3px;
    flex: 1;
    color: white;
    background: rgb(0, 0, 0);
    box-shadow: inset 0px 0px 11px 1px rgba(255, 255, 255, 0.5),
                      0px 0px 78px 5px rgba(255, 255, 255, 0.5);
    &:hover{
      color: black;
      background: white;
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg)
                 scale3d(1.035, 1.035, 1.035);
      transition: 0.5s ease-in-out 0.5s;
    }
  }
}
</style>
