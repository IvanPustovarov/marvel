import { InjectionKey } from "vue";
// @ts-ignore
import { createStore, Store } from 'vuex'
import { ICard } from "@/interfaces/ICard";

interface ILocations {
  name: string;
  description: string;
}

export interface State {
  cards: ICard[],
  filteredCards: ICard[],
  locations: ILocations[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
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
    getCards (state: State) {
      return state.cards;
    },
    getFilteredCards (state: State) {
      return state.filteredCards;
    },
    getLocations (state: State) {
      return state.locations;
    },
    getCard (state: State) {
      return (id: number) => {
        return state.cards.find((card: ICard) => card.name === id.toString())
      };
    }
  },
  mutations: {
    setFilteredCards (state: State, payload: ICard[]) {
      state.filteredCards = payload;
    },
    setCards (state: State, payload: ICard[]) {
      state.cards = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
