<template>
  <div class="container-cards cont-all">
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
import cardsJson from "../../cards.json";
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
    this.$store.commit('setCards', cardsJson);
    this.cardsToRender = this.cards;
  },
  watch: {
    cardsFiltered (value) {
      this.cardsToRender = value;
      if (!value.length) {
        this.cardsToRender = this.cards;
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
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
}
</style>
