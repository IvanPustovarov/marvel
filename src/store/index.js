import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: {
      released: [
      {
        name: "abomination",
        description: "Глупый сброд! Вы ниже меня!",
        cost: 5,
        power: 9,
        pool: 0, // 0 -- стартовый пул, 1 -- уровни 1-14, 2- первый пул, 3 -- второй пул, 4 -- третий пул.
        onReveal: false, // true, false
        ongoing: false, // true, false
        move: false, // true, false
        destroy: false, // true, false
        noAbility: true, // true, false
        draw: false // true, false
      },
      {
        name: "adam-warlock",
        description: "Если в конце хода вы выигрываете в этой локации, вы берете карту.",
        cost: 2,
        power: 0,
        pool: 4,
        onReveal: false,
        ongoing: false,
        move: false,
        destroy: false,
        noAbility: false,
        draw: true,
      },
      {
        name: "aero",
        description: "При раскрытии: Перемещает в эту локацию карты, сыгранные противником на этом ходу.",
        cost: 5,
        power: 8,
        onReveal: true,
        move: true,
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
        description: "Вы можете взять эту карту только на 6 ходу, и не раньше.",
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
        description: "При раскрытии: Противник получает 'Укус вдовы' в свою руку.",
        cost: 2,
        power: 1
      },
      {
        name: "blade",
        description: "При раскрытии: Вы сбрасываете случайную карту из руки.",
        cost: 1,
        power: 3
      },
      {
        name: "blue-marvel",
        description: "Продолжительный эффект: Все другие карты имеют +1 силы.",
        cost: 5,
        power: 3
      },
      {
        name: "brood",
        description: "При раскрытии: Призывает 2 выводка с такой же силой.",
        cost: 3,
        power: 2
      },
      {
        name: "bucky-barnes",
        description: "При уничтожении: Добавляет 'Зимнего солдата' с силой 6 в эту локацию.",
        cost: 2,
        power: 1
      },
      {
        name: "cable",
        description: "При раскрытии: Вы кладете в руку нижнюю карту колоды противника.",
        cost: 2,
        power: 2
      },
      {
        name: "captain-america",
        description: "Продолжительный эффект: Другие карты в этой локации имеют +1 силы.",
        cost: 3,
        power: 3
      },
      {
        name: "carnage",
        description: "При раскрытии: Уничтожает все карты в этой локации и получает +2 к силе за каждую уничтоженную.",
        cost: 2,
        power: 2
      },
      {
        name: "cerebro",
        description: "Продолжительный эффект: Ваши карты с наибольшей силой имеют +2 силы.",
        cost: 3,
        power: 0
      },
      {
        name: "cloak",
        description: "При раскрытии: На следующем ходу в эту локацию можно перемещать карты.",
        cost: 2,
        power: 4
      },
      {
        name: "colleen-wing",
        description: "При раскрытии: Вы сбрасываете карту с наименьшей стоимостью из своей руки.",
        cost: 2,
        power: 4
      },
      {
        name: "colossus",
        description: "Продолжительный эффект: Эту карту нельзя переместить, уничтожить и изменить ее силу.",
        cost: 2,
        power: 3
      },
      {
        name: "cosmo",
        description: "Продолжительный эффект: В этой локации не срабатывают эффекты 'При раскрытии'.",
        cost: 3,
        power: 3
      },
      {
        name: "crossbones",
        description: "Эту карту можно играть только в локации, где вы выигрываете.",
        cost: 4,
        power: 8
      },
      {
        name: "crystal",
        description: "При раскрытии: Если эта локация средняя, вы замешиваете карты из своей руки в колоду и берете 3 карты.",
        cost: 4,
        power: 4
      },
      {
        name: "cyclops",
        description: "Вперед, Люди икс!",
        cost: 3,
        power: 4
      },
      {
        name: "dagger",
        description: "При перемещении получает +2 к силе за каждую карту противника в этой локации.",
        cost: 2,
        power: 1
      },
      {
        name: "daredevil",
        description: "На 5 ходу вы можете видеть ход противника, прежде чем сделать свой.",
        cost: 2,
        power: 2
      },
      {
        name: "deadpool",
        description: "При уничтожении: Удваивает свою силу и возвращается в вашу руку.",
        cost: 1,
        power: 1
      },
      {
        name: "death",
        description: "Стоит на 1 меньше за каждую уничтоженную карту.",
        cost: 9,
        power: 12
      },
      {
        name: "deathlok",
        description: "При раскрытии: Уничтожает все ваши карты в этой локации.",
        cost: 3,
        power: 5
      },
      {
        name: "debrii",
        description: "При раскрытии: Добавляет 'камень' в каждую другую локацию.",
        cost: 3,
        power: 3
      },
      {
        name: "destroyer",
        description: "При раскрытии: Уничтожает все ваши карты.",
        cost: 6,
        power: 16
      },
      {
        name: "devil-dinosaur",
        description: "Продолжительный эффект: Имеет +2 силы за каждую карту в вашей руке.",
        cost: 5,
        power: 3
      },
      {
        name: "doctor-doom",
        description: "При раскрытии: Добавляет на вашу сторону 'думбота' с силой 5 в каждую локацию.",
        cost: 6,
        power: 5
      },
      {
        name: "doctor-octopus",
        description: "При раскрытии: Вытягивает все карты из руки противника в эту локацию.",
        cost: 5,
        power: 10
      },
      {
        name: "doctor-strange",
        description: "При раскрытии: Перемещает в эту локацию карты с наибольшей силой.",
        cost: 3,
        power: 3
      },
      {
        name: "domino",
        description: "Вы можете взять эту карту только на 2 ходу, и не раньше.",
        cost: 2,
        power: 3
      },
      {
        name: "dracula",
        description: "В конце матча вы сбрасываете карты из своей руки. Получает силу сброшенной карты.",
        cost: 4,
        power: 0
      },
      {
        name: "drax",
        description: "При раскрытии: Если на этом ходу противник разыграл карту в этой локации, получает +4 силы.",
        cost: 4,
        power: 4
      },
      {
        name: "ebony-maw",
        description: "Тест",
        cost: 1,
        power: 7
      },
      {
        name: "electro",
        description: "Tecт",
        cost: 3,
        power: 2
      },
      {
        name: "elektra",
        description: "При раскрытии: Уничтожает карту противника со стоимостью 1 в этой локации.",
        cost: 1,
        power: 1
      },
      {
        name: "enchantress",
        description: "При раскрытии: Удаляет все 'Продолжительные эффекты' у карт в этой локации.",
        cost: 4,
        power: 4
      },
      {
        name: "falcon",
        description: "При раскрытии: Возвращает в вашу руку все ваши карты со стоимостью 1.",
        cost: 2,
        power: 3
      },
      {
        name: "forge",
        description: "При раскрытии: Следующая разыгранная вами карта получит +2 к силе.",
        cost: 2,
        power: 1
      },
      {
        name: "gambit",
        description: "При раскрытии: Вы сбрасываете случайную карту из своей руки. Уничтожает случайную карту противника.",
        cost: 3,
        power: 1
      },
      {
        name: "gamora",
        description: "При раскрытии: Если на этом ходу противник разыграл карту в этой локации, получает +5 силы.",
        cost: 5,
        power: 7
      },
      {
        name: "ghost-rider",
        description: "При раскрытии: Возвращает одну из сброшенных карт в эту локацию.",
        cost: 4,
        power: 3
      },
      {
        name: "giganto",
        description: "Эту карту можно играть только в левую локацию.",
        cost: 6,
        power: 14
      },
      {
        name: "goose",
        description: "Продолжительный эффект: В этой локации нельзя играть карты стоимостью 4, 5 и 6.",
        cost: 2,
        power: 2
      },
      {
        name: "green-goblin",
        description: "При раскрытии: Противник получает контроль над этой картой.",
        cost: 3,
        power: -3
      },
      {
        name: "groot",
        description: "При раскрытии: Если на этом ходу противник разыграл карту в этой локации, получает +3 силы.",
        cost: 3,
        power: 3
      },
      {
        name: "hawkeye",
        description: "При раскрытии: Получает +2 к силе, если вы разыграете карту в этой локации на следующем ходу.",
        cost: 1,
        power: 1
      },
      {
        name: "hazmat",
        description: "При раскрытии: Снижает силу всех других карт на 1.",
        cost: 2,
        power: 1
      },
      {
        name: "heimdall",
        description: "При раскрытии: Перемещает все карты на локацию вправо.",
        cost: 6,
        power: 8
      },
      {
        name: "hela",
        description: "При раскрытии: Вы разыгрываете все сброшенные вами карты в случайные локации.",
        cost: 6,
        power: 6
      },
      {
        name: "hellcow",
        description: "При раскрытии: Вы сбрасываете 2 случайные карты из руки.",
        cost: 4,
        power: 6
      },
      {
        name: "hobgoblin",
        description: "При раскрытии: Противник получает контроль над этой картой.",
        cost: 5,
        power: -8
      },
      {
        name: "hulk-buster",
        description: "При раскрытии: Объединяется со случайной картой в этой локации.",
        cost: 3,
        power: 4
      },
      {
        name: "hulk",
        description: "ХАЛК КРУШИТЬ!",
        cost: 6,
        power: 12
      },
      {
        name: "human-torch",
        description: "При перемещении удваивает свою силу.",
        cost: 1,
        power: 2
      },
      {
        name: "iceman",
        description: "При раскрытии: Увеличивает стоимость случайной карты в руке противника.(Максимум 6)",
        cost: 1,
        power: 2
      },
    ],
      unreleased: [
        {
          name: "absorbing-man",
          description: "On Reveal: If the last card you played has an On Reveal ability, this card copies it.",
          cost: 4,
          power: 3
        },
        {
          name: "thanos",
          description: "Описание для таноса",
          cost: 1,
          power: 2
        },
        {
          name: "galactus",
          description: "Описание для Галактуса",
          cost: 1,
          power: 2
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
