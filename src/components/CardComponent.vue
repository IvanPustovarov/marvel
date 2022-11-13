<template>
  <div class="container" @click="goToCard">
    <!-- <div class="flat"> -->
    <div class="card">
      <img :src="require(`@/assets/cards/${name}.webp`)" alt="" />
      <div class="description">
        <span v-if="boldText">{{ boldText }}</span>
        <p>{{ editDescription(description) }}</p>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  components: {},
  props: {
    name: String,
    description: String,
  },
  data() {
    return {
      boldText: "",
    };
  },
  methods: {
    editDescription() {
      const effect = "Продолжительный эффект:";
      const open = "При раскрытии:";
      let newDescription;

      const effectHave = this.description.includes(effect);
      const openHave = this.description.includes(open);

      if (effectHave) {
        newDescription = this.description.slice(effect.length);
        this.boldText = effect;
      }
      if (openHave) {
        newDescription = this.description.slice(open.length);
        this.boldText = open;
      }
      return newDescription ? newDescription : this.description;
    },
    goToCard() {
      return this.$router.push(`/card/${this.name}`);
    },
  },
};
</script>


<style scoped lang="scss">
// @keyframes rotate {
//   50% {
//     transform: rotateX(0deg);
//   }
// }
.container {
  cursor: pointer;
  height: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  // .flat {
  //   transform-style: flat;
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    // animation: rotate 5s infinite;
    // transform: rotateX(45deg);
    // position: relative;
    .description {
      display: flex;
      flex-direction: column;
      color: white;
      font-weight: 500;
      font-size: 14px;
      width: 15rem;
      text-align: center;
      background: rgb(0, 0, 0);
      padding: 5px;
      border-radius: 10px;
      span {
        font-size: 17px;
        font-weight: 600;
      }
    }
    .description:hover {
      display: flex;
      flex-direction: column;
      transition: all 0.5s ease-out;
      color: black;
      font-weight: 500;
      font-size: 14px;
      width: 15rem;
      text-align: center;
      background: white;
      padding: 5px;
      border-radius: 10px;
      outline: 4px solid black;
      span {
        font-size: 17px;
        font-weight: 600;
      }
    }
    img {
      width: 300px;
    }
  }
  //}
}
</style>
