<template>
  <div class="container">
    <div class="card">
      <img :src="require(`@/assets/cards/${card.name}.webp`)" alt="" />
      <div class="info">
        <div>
          Описание:
          <p>{{ card.description }}</p>
        </div>
        <span>Статы:</span>
        <div class="stats">
          <div class="cost">{{ card.cost }}</div>
          <div class="power">{{ card.power }}</div>
        </div>
        <div>
          Статус:
          <div>В релизе</div>
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
  mounted() {
    console.log(this.card);
  },
  computed: {
    params() {
      return this.$route.params;
    },
    cardId() {
      return this.params.id;
    },
    card() {
      return this.$store.state.cards.released.find(
        (card) => card.name === this.cardId
      );
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .card {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    .info {
      gap: 20px;
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      height: 16rem;
      width: 20rem;
      border-radius: 10px;
      padding: 1rem;
      background: black;
      color: white;
      box-shadow: 0px 10px 25px 5px rgba(255, 255, 255, 0.5);
      .stats {
        display: flex;
        flex-direction: row;
        .power {
          position: relative;
          width: 34px;
          height: 34px;
          font-weight: 900;
          padding: 6px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
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
          font-weight: 900;
          padding: 6px;
          border-radius: 50%;
          background-color: #3561fd;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
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
      width: 300px;
    }
  }
}
</style>