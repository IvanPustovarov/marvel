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

<script lang="ts">
import {defineComponent} from "vue"

import NavigtionView from '@/views/NavigtionView.vue'
import FooterView from './views/FooterView.vue'

export default defineComponent({
  name: 'NavigationView',
  components: { NavigtionView, FooterView },
})

</script>

<style lang="scss">
@font-face {
  font-family: 'Arkhip';
  src: local('Arkhip'), url(./fonts/Arkhip/Arkhip_font.ttf) format('truetype');
}
* {
  font-family: 'Arkhip', Helvetica, Arial;
  padding: 0;
  margin: 0;
}
body {
  display: flex;
  justify-content: center;
  background: center repeat url('./assets/back.jpg');
  flex-direction: column;
}

.container-app {
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(180deg, rgba(23, 12, 40, 0.9), rgb(24, 15, 46));
  background-size: 400% 400%;
}

</style>
