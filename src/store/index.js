import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: {
      released: [
      {
        name: "abomination",
        description: "Глупый сброд! Вы ниже меня!",
        cost: 5,
        power: 9
      },
      {
        name: "adam-warlock",
        description: "В конце хода вы берете карту, если вы выигрываете в этой локации.",
        cost: 2,
        power: 0
      },
      {
        name: "aero",
        description: "При раскрытии: Перемещает в эту локацию карты, сыгранные противником на этом ходу.",
        cost: 5,
        power: 8
      },
      {
        name: "agatha-harkness",
        description: "Начинает игру в руке и играет карты за вас.",
        cost: 6,
        power: 14
      },
      {
        name: "agent-13",
        description: "При раскрытии: Вы кладете в руку случайную карту.",
        cost: 1,
        power: 2
      },
      {
        name: "america-chavez",
        description: "Вы можете взять эту карту только на 6 ходу и не раньше.",
        cost: 6,
        power: 9
      },
      {
        name: "angel",
        description: "Когда какая-либо карта уничтожается, вылетает из колоды и занимает ее место.",
        cost: 1,
        power: 2
      },
      {
        name: "angela",
        description: "Когда вы играете карту в этой локации, получает +2 силы",
        cost: 2,
        power: 1
      },
      {
        name: "ant-man",
        description: "Продолжительный эффект: Имеет +3 силы, если в этой локации 4 карты.",
        cost: 1,
        power: 1
      },
      {
        name: "apocalypse",
        description: "При сбрасывании: Возвращается в руку с +4 силы.",
        cost: 6,
        power: 8
      },
      {
        name: "armor",
        description: "Продолжительный эффект: Карты в этой локации нельзя уничтожить.",
        cost: 2,
        power: 3
      },
      {
        name: "arnim-zola",
        description: "При раскрытии: Уничтожает случайную карту в этой локации и призывает ее копии в другие локации.",
        cost: 6,
        power: 0
      },
      {
        name: "baron-mordo",
        description: "При раскрытии: Противник берет карту. Ее стоимость становится равна 6.",
        cost: 2,
        power: 3
      },
      {
        name: "beast",
        description: "При раскрытии: Возвращает карты из этой локации в вашу руку. Они стоят на 1 меньше.",
        cost: 2,
        power: 2
      },
      {
        name: "bishop",
        description: "Когда вы разыгрываете карту, получает +1 силы.",
        cost: 3,
        power: 1
      },
      {
        name: "black-bolt",
        description: "При раскрытии: Противник сбрасывает карту с наименьшей стоимостью из своей руки.",
        cost: 5,
        power: 8
      },
      {
        name: "black-cat",
        description: "Если в конце хода эта карта находится в руке, вы ее сбрасываете.",
        cost: 3,
        power: 6
      },
      {
        name: "black-panther",
        description: "При раскрытии: Удваивает свою силу.",
        cost: 5,
        power: 4
      },
      {
        name: "black-widow",
        description: "При раскрытии: Противник получает Укус вдовы в свою руку.",
        cost: 2,
        power: 1
      },
    ],
      unreleased: [
        {
          name: "absorbing-man",
          description: "On Reveal: If the last card you played has an On Reveal ability, this card copies it.",
          cost: 4,
          power: 3
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
