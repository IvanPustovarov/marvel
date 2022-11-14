<template>
  <div class="container">
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
@font-face {
  font-family: "Arkhip";
  src: local("Arkhip"), url(./fonts/Arkhip/Arkhip_font.ttf) format("truetype");
}
* {
  font-family: "Arkhip", Helvetica, Arial;
  padding: 0;
  margin: 0;
}
body {
  display: flex;
  justify-content: center;
  background: center repeat url("./assets/back.jpg");
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
</style>
