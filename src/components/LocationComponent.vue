<template>
  <div class="container-of-location" @click="goToLocation">
    <div class="location">
      <img
        :src="require(`@/assets/location/${name}.webp`)"
        alt="location"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationComponent",
  components: {},
  props: {
    name: String,
    description: String,
  },
  data() {
    return {
    };
  },
  methods: {
    goToLocation() {
    //   return this.$router.push(`/location/${this.name}`);
    },
  },
};
</script>


<style scoped lang="scss">

.container-of-location {
  .location {
    img {
      width: $img-width;
    }
  }
}
</style>
