<template>
  <div class="
    container-app
    cont-all
  ">
    <NavigtionView />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import NavigtionView from "@/views/NavigtionView.vue";
import FooterView from "./views/FooterView.vue";
export default {
  name: "NavigationView",
  components: { NavigtionView, FooterView },
};
</script>

<style lang="scss">

.container-app {
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}

</style>
