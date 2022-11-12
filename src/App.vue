<template>
  <div class="container">
    <NavigtionView />
    <router-view />
  </div>
</template>

<script>
import NavigtionView from "@/views/NavigtionView.vue";
export default {
  name: "NavigationView",
  components: { NavigtionView },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background: center no-repeat url("./assets/main-back.jpg");
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
}
</style>
