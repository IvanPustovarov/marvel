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
      <button @click="setCardsFilter" :disabled="!isRelust" class="button-filter-cards button-top text-[14px]">поиск</button>
      <button @click="resetCardsFilter" :disabled="!cardsFiltered.length" class="button-reset-cards button-top text-[14px]">сбросить фильтры</button>
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
@import '../assets/styles/_search-component.scss';
</style>
