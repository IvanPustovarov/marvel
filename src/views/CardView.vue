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

<script>
export default {
  components: {},
  name: "CardPage",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  computed: {
    params() {
      return this.$route.params;
    },
    cardId() {
      return this.params.id;
    },
    card() {
      return this.$store.state.cards.find(
        (card) => card.name === this.cardId
      );
    },
    release () {
      return this.card.release ? "Выпущена" : "Не выпущена"
    },
    pool () {
      const poolRus = {
        0: 'Стартовый пул',
        1: '1-14 уровни',
        2: '1 пул',
        3: '2 пул',
        4: '3 пул',
        5: '4 пул',
        6: '5 пул'
      };
      return poolRus[this.card.pool];
    }
  },
};
</script>

<style scoped lang="scss">

.container-card {
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  margin-top: $indent-md;
  .card {
    align-items: flex-start;
    flex-direction: row;
    .info {
      .card-desc{
        text-align: center;
        flex-direction: column;
        span {
          margin-bottom: 0.25rem;
          font-size: 24px;
          font-weight: $font-xl-bold;
        }
      }
      gap: 20px;
      margin-top: $indent-sm;
      flex-direction: column;
      width: 20rem;
      border-radius: $indent-md-px;
      padding: $indent-md;
      background: black;
      color: white;
      transition: $transit-easy;
      &:hover{
         box-shadow: inset 0px 0px 17px 2px rgba(255, 255, 255, 0.5),
        0px 0px 49px 6px rgba(255, 255, 255, 0.5);
      }
      .stats {
        flex-direction: row;
        align-items: center;
        span{
          margin-right: $indent-sm;
        }
        .power {
          position: relative;
          width: 34px;
          height: 34px;
          font-weight: $font-xl-bold;
          padding: 6px;
          display: -webkit-box;
          display: -ms-flexbox;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          background-color: #fe6b26;
          -webkit-clip-path: polygon(
            50% 0%,
            95% 25%,
            95% 75%,
            50% 100%,
            5% 75%,
            5% 25%
          );
          clip-path: polygon(
            50% 0%,
            95% 25%,
            95% 75%,
            50% 100%,
            5% 75%,
            5% 25%
          );
          -webkit-box-shadow: inset 4px -2px 1px #fff6bb;
          box-shadow: inset 7px 0px 1px #fff6bb;
          text-shadow: -2px 0 #712401, 0 2px #712401, 1px 0 #712401,
            0 -2px #712401;
        }
        .cost {
          margin-right: 12px;
          width: 32px;
          height: 31px;
          font-weight: $font-xl-bold;
          padding: 6px;
          border-radius: 50%;
          background-color: #3561fd;
          display: -webkit-box;
          display: -ms-flexbox;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border: solid 1px #64a4ef;
          background-image: linear-gradient(
              137deg,
              #fdfdfd 16%,
              rgba(41, 150, 164, 0) 25%,
              rgba(41, 150, 164, 0) 104%,
              #fff 82%
            ),
            radial-gradient(
              circle at 50% 50%,
              #2f4f8f,
              #3561fd 44%,
              #097f95 73%,
              #2da5b7 76%
            );
          -webkit-box-shadow: inset 0px 0px 3px #fff;
          box-shadow: inset 0px 0px 3px #fff;
          text-shadow: -2px 0 #011d7e, 0 2px #011d7e, 1px 0 #011d7e,
            0 -2px #011d7e;
        }
      }
    }
    img {
      width: $img-width;
      transition: $transit-easy;
      &:hover{
       transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.1, 1.1, 1.1)
      }
    }
  }
}
</style>
