<template>
  <div class="container">
    <div class="search">
      <input type="text" v-model="search"/>
      <div class="settings">
       <img :src="SettingsLogo" alt="">
      </div>
    </div>
    <SearchResult @search="cleanSearch" :names="names" :descriptions="descriptions"/>
  </div>
</template>

<script>
import SearchResult from './SearchResult.vue';
import SettingsLogo from "@/assets/settings.svg";
export default {
  name: "SearchComponent",
  components: {
    SearchResult,
    // eslint-disable-next-line vue/no-unused-components
    SettingsLogo
  },
  setup() {
      return {
        SettingsLogo
      };
  },
  props: {},
  data() {
    return {
      search: "",
      names: [],
      descriptions: []
    };
  },
  watch: {
    search(value) {
      if(value.length) {
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
      if(!value.length) {
        this.names = [];
        this.descriptions = [];
      }
    }
  },
  methods: {
    cleanSearch() {
      this.search = "";
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
    .settings{
      background: white;
      border-radius: 5px;
      padding: 1px 2px 1px 2px;
      img{
        width: 30px;
        height: 30px;
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
