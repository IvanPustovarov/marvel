<template>
  <div class="container">
    <div class="left-nav item-main">
      <h1>Про наш чудесный сайт по игре "Марвел Снап"</h1>
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
.container {
  margin-top: 1rem;
  flex-direction: row;
  display: flex;
  width: 95%;
  .left-nav {
    flex: 1;
    margin: 0.5rem 0 0.5rem 0.5rem;
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
    border-radius: 3px;
    flex: 1;
    color: white;
    background: rgb(0, 0, 0);
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
