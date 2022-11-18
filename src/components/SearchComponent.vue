<template>
  <div class="container">
    <div class="search">
      <input type="text" v-model="search"/>
      <button @click="handleSearch" :disabled="!search.length">поиск</button>
    </div>
    <SearchResult :names="names" :descriptions="descriptions"/>
  </div>
</template>

<script>
import SearchResult from './SearchResult.vue';
export default {
  name: "SearchComponent",
  components: {SearchResult},
  props: {},
  data() {
    return {
      search: "",
      names: [],
      descriptions: []
    };
  },
  methods: {
    handleSearch () {
      const lowerName = this.search.toLowerCase();
      if (lowerName.length) {
        this.names = this.cards.released.filter((card) => card.name.includes(lowerName));
      }

      const lowerDescription = this.search.toLowerCase();
      const lowerDescriptionsArray = this.cards.released.map((card) => (
        {
          description: card.description.toLowerCase(),
          name: card.name,
          power: card.power,
          cost: card.cost
        }));
      if (lowerDescription.length) {
        this.descriptions = lowerDescriptionsArray.filter((card) => card.description.includes(lowerDescription));
      }
    }
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
  }
};
</script>


<style scoped lang="scss">
.container {
  margin: 1.5rem 0 0 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  .search{
    display: flex;
    align-items: center;
    input{
      border: none;
      height: 2rem;
      background: wheat;
      border-radius: 5px;
      padding-left: 5px;
      margin-right: .5rem;
      font-size: 18px;
      background: linear-gradient(
            180deg,
            rgba(128, 70, 222, 0.9),
            rgb(35, 14, 83)
          );
      background-size: 400% 400%;
      color: white;
      &:focus{
        outline: none;
      }
    }
    button{
      height: 2rem;
      border: none;
      background: wheat;
      width: 5rem;
      cursor: pointer;
      border-radius: 3px;
      background: linear-gradient(
            180deg,
            rgba(128, 70, 222, 0.9),
            rgb(35, 14, 83)
          );
      background-size: 400% 400%;
      color: white;
      &:disabled {
        background: gray;
      }
    }
  }
  .search-result{
    position: absolute;
    width: 22.4rem;
    background: linear-gradient(
      180deg,
      rgba(128, 70, 222, 0.9),
      rgb(35, 14, 83)
      );
    background-size: 400% 400%;
    bottom: 0;
    border-radius: 3px;
    align-self: flex-start;
  }
}
</style>
