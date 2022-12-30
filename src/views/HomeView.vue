<template>
  <div class="container-home cont-all">
     <div class="left-nav item-main">
      <MainLeftPolygons/>
      <h1>"Марвел Снап"</h1>
      <p>Здесь вы можете посмотреть актуальные карты и локации по игре "Марвел Снап".</p>
    </div>
    <div class="right-content item-main">
      <MainRightPolygons/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime ducimus sunt asperiores suscipit illo numquam atque neque amet saepe
        provident doloribus labore laudantium unde culpa magnam distinctio quo ullam architecto officia obcaecati, deleniti pariatur cum.
        Placeat assumenda architecto reprehenderit iure in voluptas reiciendis a eum corrupti dignissimos, velit explicabo.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLeftPolygons from '@/components/ui/MainLeftPolygons.vue';
import MainRightPolygons from '@/components/ui/MainRightPolygons.vue';

export default defineComponent({
  name: 'HomeView',
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
});
</script>

<style scoped lang="scss">
@import '../assets/styles/_home.scss';
</style>
