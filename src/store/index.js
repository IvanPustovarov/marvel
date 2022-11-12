import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: {
      released: [
      {
        name: "abomination",
        description: "Глупый сброд! Ты ниже меня!",
      },
      {
        name: "adam-warlock",
        description: "В конце хода вы берете карту, если вы выигрываете в этой локации.",
      },
      {
        name: "aero",
        description: "При раскрытии: Перемещает в эту локацию карты, сыгранные противником на этом ходу.",
      },
      {
        name: "agatha-harkness",
        description: "Начинает игру в руке и играет карты за вас."
      },
      {
        name: "agent-13",
        description: "При раскрытии: Вы кладете в руку случайную карту."
      },
      {
        name: "agatha-harkness",
        description: "Начинает игру в руке и играет карты за вас."
      },
    ],
      unreleased: [
        {
          name: "absorbing-man",
          description: "On Reveal: If the last card you played has an On Reveal ability, this card copies it.",
        },
      ]
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
