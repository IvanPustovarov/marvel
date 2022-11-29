<template>
  <div class="polygon-container">
    <div class="first-polygon polygon"></div>
    <div class="second-polygon polygon"></div>
    <div class="third-polygon polygon"></div>
    <div class="fourth-polygon polygon"></div>
    <div class="fifth-polygon polygon"></div>
    <div class="sixth-polygon polygon"></div>
    <div class="seventh-polygon polygon"></div>
  </div>
</template>

<script>
export default {
  name: "MainLeftPolygons",
  components: {},
  data() {
    return {
    };
  },
};
</script>


<style scoped lang="scss">
.polygon-container{
    .polygon{
      background: pink;
      position: absolute;
      z-index: 0;
      transition: all 0.5s ease-out;
    }
    .first-polygon{
      display: unset;
      top: -10px;
      left: -12px;
      width: 100px;
      height: 50px;
      -webkit-clip-path: polygon(0% 0%, 100% 19%, 29% 100%, 0 0%);
      clip-path: polygon(0% 0%, 100% 19%, 29% 100%, 0 0%); // TODO: backgdoung-gradient
    }
    .second-polygon{
      top: 139px;
      left: -16px;
      width: 87px;
      height: 140px;
      -webkit-clip-path: polygon(24% 1%, 82% 62%, 67% 100%, 1% 91%);
      clip-path: polygon(24% 1%, 82% 62%, 67% 100%, 1% 91%);
    }
    .third-polygon{
      top: 370px;
      left: -66px;
      width: 138px;
      height: 97px;
      -webkit-clip-path: polygon(32% 0%, 100% 42%, 54% 57%, 44% 99%);
      clip-path: polygon(32% 0%, 100% 42%, 54% 57%, 44% 99%);
    }
    .fourth-polygon{
      top: -21px;
      left: 672px;
      width: 113px;
      height: 97px;
      -webkit-clip-path: polygon(0% 15%, 100% 100%, 39% 82%, 0% 99%);
      clip-path: polygon(0% 15%, 100% 100%, 39% 82%, 0% 99%);
    }
    .fifth-polygon{
      top: 181px;
      left: 672px;
      width: 113px;
      height: 149px;
      -webkit-clip-path: polygon(0% 15%, 100% 100%, 39% 82%, 0% 99%);
      clip-path: polygon(0% 15%, 100% 51%, 28% 100%, 0% 99%);
    }
    .sixth-polygon{
      top: 64px;
      left: 672px;
      width: 113px;
      height: 120px;
      -webkit-clip-path: polygon(0% 15%, 100% 100%, 39% 82%, 0% 99%);
      clip-path: polygon(0% 24%, 31% 6%, 76% 100%, 0% 99%);
    }
    .seventh-polygon{
      top: 371px;
      left: 672px;
      width: 113px;
      height: 54px;
      -webkit-clip-path: polygon(0% 15%, 100% 100%, 39% 82%, 0% 99%);
      clip-path: polygon(0% 24%, 106% -14%, 22% 100%, 0% 99%);
    }
}
</style>
