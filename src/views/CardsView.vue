<template>
  <div class="container-cards">
    <CardComponent
      v-for="card in cardsToRender"
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
    return {
      cardsToRender: [],
    };
  },
  mounted() {
    this.cardsToRender = this.cards.released;
  },
  watch: {
    cardsFiltered (value) {
      this.cardsToRender = value;
      if (!value.length) {
        this.cardsToRender = this.cards.released
      }
    }
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
    cardsFiltered () {
      return this.$store.getters.getFilteredCards;
    }
  },
};
</script>

<style scoped lang="scss">
.container-cards {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
}
</style>
