<template>
  <div class="container-settings">
    <div @click="closeSettings" class="close">
        <img src="@/assets/icon-close.webp" alt="close">
    </div>
    <div>По описанию <input type="checkbox"></div>
    <div>Способности <select name="" id=""></select></div>
    <div>Невыпущенные <input type="checkbox"></div>
    <div>Сила <input type="radio"></div>
    <div>Стоимость <input type="radio"></div>
    <div>Пул <select name="" id=""></select></div>
  </div>
</template>

<script>
export default {
  name: "SettingsComponent",
  components: {
  },
  props: {
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    closeSettings() {
      this.$emit('show');
    }
  },
  computed: {
  }
};
</script>


<style scoped lang="scss">
.container-settings{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 3rem;
    left: 31rem;
    z-index: 2;
    .close{
        align-self: flex-end;
        cursor: pointer;
        width: 30px;
        height: 30px;
      img{
        width: 30px;
        filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(-140deg) brightness(87%) contrast(119%);
      }
    }
}
</style>
