<template>
  <div class="container-app flex">
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
  flex-direction: column;
}

.container-app {
  // display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(
      180deg,
      rgba(23, 12, 40, 0.9),
      rgb(24, 15, 46)
      );
  background-size: 400% 400%;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 15px rgba(255, 255, 255);
  border-radius: 2px;
}
</style>
