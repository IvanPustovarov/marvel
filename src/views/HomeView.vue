<template>
  <div class="container-home">
    <div class="left-nav item-main">
      <MainLeftPolygons/>
      <h1>"Марвел Снап"</h1>
      <p>Здесь вы можете посмотреть актуальные карты и локации по игре "Марвел Снап".</p>
    </div>
    <div class="right-content item-main">
      <MainRightPolygons/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus voluptas porro possimus adipisci cum, nulla reiciendis consequuntur vel ipsam. Quia facere eius quidem voluptates optio recusandae eligendi enim qui.</p>
    </div>
  </div>
</template>

<script>
import MainLeftPolygons from '@/components/polygons/MainLeftPolygons.vue';
import MainRightPolygons from '@/components/polygons/MainRightPolygons.vue';
export default {
  name: "HomeView",
  components: {
    MainLeftPolygons,
    MainRightPolygons
  },
  data() {
    return {
    };
  },
  methods: {
  }
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
  gap: 110px;
  .left-nav {
    width: 42rem;
    height: 27rem;
    .title {
      height: 5rem;
    }
    h1{
      margin: 1rem 0 0 1rem;
    }
    p{
      margin: 0 1rem 0 1rem;
    }
  }
  .right-content {
    height: 23rem;
    width: 29rem;
    margin-left: 1rem;
  }
  .item-main{
    position: relative;
    border-radius: 3px;
    color: white;
    background-color: rgb(0, 0, 0);
    transition: color 0.5s, background-color 0.5s, transform 0.5s, box-shadow 0.5s;
    &:hover{
      color: black;
      background-color: white;
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg)
                 scale3d(1.035, 1.035, 1.035);
      box-shadow: inset 0px 0px 11px 1px rgba(255, 255, 255, 0.5),
                      0px 0px 78px 5px rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
