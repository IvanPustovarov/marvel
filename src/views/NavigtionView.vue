<template>
  <div class="nav-panel">
    <nav>
      <div class="logo-img">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="links cont-all">
        <div class="item cont-all">
          <router-link to="/">Главная</router-link>
        </div>
        <div class="item cont-all">
          <router-link to="/cards">Карты</router-link>
        </div>
        <div class="item cont-all">
          <router-link to="/locations">Локации</router-link>
        </div>
      </div>
      <SearchComponent />
    </nav>
    <div class="br"></div>
  </div>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  name: "NavigationView",
  components: { SearchComponent },
};
</script>


<style scoped lang="scss">
@import '../assets/styles/_navigation.scss';
</style>
