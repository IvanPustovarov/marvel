<template>
  <div class="container">
    <div class="card">
      <img :src="require(`@/assets/cards/${card.name}.webp`)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "CardPage",
  props: {},
  data() {
    return {};
  },
  mounted() {
    console.log(this.card);
  },
  computed: {
    params() {
      return this.$route.params;
    },
    cardId() {
      return this.params.id;
    },
    card() {
      return this.$store.state.cards.released.find(
        (card) => card.name === this.cardId
      );
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 300px;
    }
  }
}
</style>