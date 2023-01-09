<template>
  <div class="container-card cont-all">
    <div class="card cont-all">
      <img :src="require(`@/assets/cards/${card.name}.webp`)" alt="" />
      <div class="info">
        <div class="card-desc cont-all">
          <span>Описание:</span>
          <p class="pb-2">{{ card.description }}</p>
        </div>
        <div class="stats cont-all">
          <span>Характеристики:</span>
          <div class="cost cont-all">{{ card.cost }}</div>
          <div class="power cont-all">{{ card.power }}</div>
        </div>
        <div>
          Статус:
          {{ release }}
        </div>
        <div>
          Источник:
          <div>{{ pool }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ICard } from "@/interfaces/ICard";

export default defineComponent({
  components: {},
  name: "CardPage",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {
    cardId(): string | string[] {
      return this.$route.params.id;
    },
    card(): ICard {
      return this.$store.state.cards.find(
          (card: ICard) => card.name === this.cardId
      );
    },
    release (): string {
      return this.card.release ? "Выпущена" : "Не выпущена"
    },
    pool(): string {
      const poolRus: Record<number, string> = {
        0: 'Стартовый пул',
        1: '1-14 уровни',
        2: '1 пул',
        3: '2 пул',
        4: '3 пул',
        5: '4 пул',
        6: '5 пул'
      }
      return poolRus[this.card.pool];
    }
  },
});
</script>

<style scoped lang="scss">
@import '../assets/styles/_card-view.scss';
</style>
