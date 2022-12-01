<template>
  <div class="container-cards">
    <CardComponent
      v-for="card in cards.released"
      :key="card.name"
      :name="card.name"
      :description="card.description"
    />
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
export default {
  components: { CardComponent },
  name: "CardsPage",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
  },
};
</script>

<style scoped lang="scss">
.container-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
}
</style>
