import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: [],
    filteredCards: [],
    locations: [
      {
        name: 'asgard',
        description: 'После 4го хода тыры пыры очень классно'
      },
      {
        name: 'daily-bugle',
        description: 'После 4го хода тыры пыры очень классно'
      }
    ]
  },
  getters: {
    getCards (state) {
      return state.cards;
    },
    getFilteredCards (state) {
      return state.filteredCards;
    },
    getLocations (state) {
      return state.locations;
    }
  },
  mutations: {
    setFilteredCards (state, payload) {
      state.filteredCards = payload;
    },
    setCards (state, payload) {
      state.cards = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
