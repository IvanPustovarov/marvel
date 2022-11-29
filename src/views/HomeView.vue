<template>
  <div class="container-home">
    <div class="left-nav item-main">
      <MainLeftPolygons/>
      <h1><pre>Про наш чудесный сайт
        по игре "Марвел Снап"</pre></h1>
      <pre>
        Здесь я расскажу подробнее про сайт и что мы будет тут показывать.

      Наш сайт очень классный. Очень. Реально очень.
      И это не пост-ирония.
      Очень много текста, чтобы блок стал длинее вниз.

      вот ещё пару отступов.
      и ещё чуть-чуть

      а если без прикола, то этот блок создан,
      чтобы потренить clip-path: polygon

      вот эти штуки по краям должны создать эффект нелинейности


      где-то плюс минус вот такой высоты будет блок.
      </pre>
    </div>
    <div class="right-content item-main">
      <MainRightPolygons/>
       <pre>

  Ничем непримечательный контент справа, который
  пока что не заполнен.

  Пришло время заполнить контент, чтобы понять
  какой высоты он будет.

  В зыбкой хляби болот
  Тонет тихо душа забытая
  Подле леса щедрот
  Еле теплится жизнь разбитая.

  Ничего не поделать :3 люблю драм-and-bass

  О, может кружки какие-то влепить ?
  а не только треугольники

  ещё пару строк для высоты
      </pre>
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
  gap: 100px;
  .left-nav {
    .title {
      height: 5rem;
    }
    h1{
      margin: 1rem 0 0 1rem;
    }
  }
  .right-content {
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
