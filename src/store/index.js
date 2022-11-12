import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: {
      released: [
      {
        name: "abomination",
        description: "Вася пупкин",
      },
      {
        name: "absorbing-man",
        description: "On Reveal: If the last card you played has an On Reveal ability, this card copies it.",
      },
      {
        name: "adam-warlock",
        description: "ongoing my anime",
      },
      {
        name: "aero",
        description: "При раскрытии: Перемещает в эту локацию карты, сыгранные противником на этом ходу.",
      },
      {
        name: "agatha-harkness",
        description: "Начинает игру в руке и играет карты за вас."
      },
    ],
      unreleased: []
    }
  },
  getters: {
    getCards (state) {
      return state.cards;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
