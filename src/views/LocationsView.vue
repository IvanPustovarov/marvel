<template>
  <div class="container-location">
    <LocationComponent
      v-for="location in locations"
      :key="location.name"
      :name="location.name"
    />
  </div>
</template>


<script>
import LocationComponent from '@/components/LocationComponent.vue';
export default {
  components: { LocationComponent },
  name: "LocationsPage",
  props: {},
  computed: {
    locations() {
      return this.$store.getters.getLocations;
    },
  }
};
</script>

<style scoped lang="scss">
.container-location {
  flex: 1;
  width: 100vw;
}
</style>
