<template>
  <div class="polygon-container">
    <div class="first-polygon polygon"></div>
    <div class="second-polygon polygon"></div>
    <div class="third-polygon polygon"></div>
    <div class="fourth-polygon polygon"></div>
  </div>
</template>

<script>
export default {
  name: "MainLeftPolygons",
  components: {},
};
</script>


<style scoped lang="scss">
.polygon-container{
    .polygon{
      background: linear-gradient(-90deg, #000000, #78687c);
      background-size: 100% 100%;
      position: absolute;
    }
    .first-polygon{
      top: 72px;
      left: -70px;
      width: 150px;
      height: 97px;
      -webkit-clip-path: polygon(0% 0%, 100% 19%, 29% 100%, 0 0%);
      clip-path: polygon(38% 15%, 100% 80%, 29% 100%, 0% 0%);
    }
    .second-polygon{
      top: 193px;
      left: -97px;
      width: 150px;
      height: 97px;
      -webkit-clip-path: polygon(0% 0%, 100% 19%, 29% 100%, 0 0%);
      clip-path: polygon(91% 0%, 83% 72%, 75% 58%, 0% 0%);
    }
    .third-polygon{
      top: 272px;
      left: -99px;
      width: 150px;
      height: 97px;
      -webkit-clip-path: polygon(0% 0%, 100% 19%, 29% 100%, 0 0%);
      clip-path: polygon(78% 5%, 75% 80%, 0% 100%, 68% 0%);
    }
    .fourth-polygon{
      top: 11px;
      left: -70px;
      width: 150px;
      height: 59px;
      -webkit-clip-path: polygon(0% 0%, 100% 19%, 29% 100%, 0 0%);
      clip-path: polygon(91% 27%, 45% 70%, 46% 88%, 0% 0%);
    }
}
</style>
