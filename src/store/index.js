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
        name: "america-chavez",
        description: "Вы можете взять эту карту только на 6 ходу и не раньше."
      },
      {
        name: "angel",
        description: "Когда какая-либо карта уничтожается, вылетает из колоды и занимает ее место."
      },
      {
        name: "angela",
        description: "Когда вы играете карту в этой локации, получает +2 силы"
      },
      {
        name: "ant-man",
        description: "Продолжительный эффект: Имеет +3 силы, если в этой локации 4 карты."
      },
      {
        name: "apocalypse",
        description: "При сбрасывании: Возвращается в руку с +4 силы."
      },
      {
        name: "armor",
        description: "Продолжительный эффект: Карты в этой локации нельзя уничтожить."
      },
      {
        name: "arnim-zola",
        description: "При раскрытии: Уничтожает случайную карту в этой локации и призывает ее копии в другие локации."
      },
      {
        name: "baron-mordo",
        description: "При раскрытии: Противник берет карту. Ее стоимость становится равна 6."
      },
      {
        name: "beast",
        description: "При раскрытии: Возвращает карты из этой локации в вашу руку. Они стоят на 1 меньше."
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
