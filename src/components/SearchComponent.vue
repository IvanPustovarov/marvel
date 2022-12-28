<template>
  <div class="
      container-search
      cont-all
      ">
    <div class="
        search
        cont-all
      ">
      <input v-focus type="text" v-model="search" placeholder="Поиск"/>
      <button @click="setCardsFilter" :disabled="!isRelust" class="button-filter-cards button-top">поиск</button>
      <button @click="resetCardsFilter" :disabled="!cardsFiltered.length" class="button-reset-cards button-top">сбросить фильтры</button>
      <div class="settings" @click="openSetting">
        <img :src="SettingsLogo" alt="setting">
      </div>

    </div>
    <SearchResult @search="cleanSearch" :names="names" :descriptions="descriptions"/>
    <SettingsComponent @show="openSetting" v-if="isShowSetting"/>
  </div>
</template>

<script>
const focus = {
  mounted: (el) => el.focus()
}

import SearchResult from './SearchResult.vue';
import SettingsLogo from "@/assets/settings.svg";
import SettingsComponent from './SettingsComponent.vue';
export default {
  name: "SearchComponent",
  components: {
    SearchResult,
    // eslint-disable-next-line vue/no-unused-components
    SettingsLogo,
    SettingsComponent
  },
  directives: {
    focus
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
      descriptions: [],
      isShowSetting: false,
      isRelust: false,
    };
  },
  watch: {
    search(value) {
      if(value.length) {
        const lowerName = this.search.toLowerCase();
      if (lowerName.length) {
        this.names = this.cards.filter((card) => card.name.includes(lowerName));
        this.isRelust = true;
      }

      const lowerDescription = this.search.toLowerCase();
      const lowerDescriptionsArray = this.cards.map((card) => (
        {
          description: card.description.toLowerCase(),
          name: card.name,
          power: card.power,
          cost: card.cost
        }));
      if (lowerDescription.length) {
        this.descriptions = lowerDescriptionsArray.filter((card) => card.description.includes(lowerDescription));
        this.isRelust = true;
      }
      }
      if(!value.length) {
        this.isRelust = false;
        this.names = [];
        this.descriptions = [];
      }
    }
  },
  methods: {
    cleanSearch() {
      this.search = "";
    },
    openSetting() {
      this.isShowSetting = !this.isShowSetting;
    },
    setCardsFilter () {
      this.$store.commit('setFilteredCards', this.names ? this.names : this.descriptions);
    },
    resetCardsFilter () {
       this.$store.commit('setFilteredCards', []);
    }
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
    cardsFiltered () {
      return this.$store.getters.getFilteredCards;
    }
  }
};
</script>


<style scoped lang="scss">

.container-search {
  justify-content: center;
  position: relative;
  margin-left: 2rem;
  .search{
    align-items: center;
    input{
      border: none;
      height: 2rem;
      border-radius: 5px;
      padding-left: 5px;
      margin-right: .5rem;
      font-size: 18px;
      background: $back-gradient;
      background-size: $back-size-md;
      color: white;
      width: 30rem;
      &:focus{
        outline: none;
      }
      &::placeholder {
          color: rgb(153, 151, 170);
          letter-spacing: -1.5px;
        }
    }
    .settings{
      cursor: pointer;
      padding: 1px 2px 1px 2px;
      img{
        width: 30px;
        height: 30px;
        filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(-140deg) brightness(87%) contrast(119%);
      }
    }
    .button-top{
      border: none;
      border-radius: 2px;
      padding: 0 0.5rem 0 0.5rem;
      color: white;
      height: 2rem;
      background:$back-gradient;
      background-size: $back-size-md;
      cursor: pointer;
      margin-right: 1rem;
      &:disabled{
        color: black;
        cursor: auto;
      }
    }
    .button-filter-cards{
    }
    .button-reset-cards{
      background: none;
      background-color: rgb(233, 110, 110);
    }
  }
  .search-result{
    position: absolute;
    width: 22.4rem;
    background: $back-gradient-solid;
    background-size: $back-size-md;
    bottom: 0;
    border-radius: 3px;
    align-self: flex-start;
  }
}
</style>
