<template>
  <div class="container-of-card" @click="goToCard">
    <div class="card">
      <img
        :src="require(`@/assets/cards/${name}.webp`)"
        alt="card"
        @mouseenter="mouseEnter"
        @mousemove="mouseMove"
        @mouseleave="mouseLeave"
      />
      <div class="description">
        <span v-if="boldText">{{ boldText }}</span>
        <p>{{ editDescription(description) }}</p>
      </div>
    </div>
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
      rotateMoveX: null,
      rotateMoveY: null,
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
    mouseEnter() {
      this.$el.addEventListener("mousemove", this.mouseMove, false);
      this.$el.style.transition = "all 0.5s ease-out";
    },
    mouseLeave() {
      this.$el.style.transform = "none";

      this.rotateMoveY = null;
      this.rotateMoveX = null;
    },
    mouseMove(event) {
      // console.log(event.offsetX, event.offsetY); // we did it!
      let X = event.offsetX / 15;

      let Y = event.offsetY / 15;
      if (X < 10 && Y < 10) {
        Y *= -1;
        X *= -1;
        X -= 20;
        Y += 10;
      }
      if (X > 10 && Y < 10) {
        X *= -1;
        X -= 10;
        Y -= 10;
      }
      if (X > 10 && Y > 10) {
        Y *= -1;
      }
      if (X < 10 && Y > 10) {
        X *= -1;
        X += 20;
      }
      // console.log(X, Y);
      this.rotateMoveX = X;
      this.rotateMoveY = Y;

      // console.log(this.rotateMoveX, this.rotateMoveY);

      this.$el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.035, 1.035, 1.035)`;
    },
  },
};
</script>


<style scoped lang="scss">
.container-of-card {
  cursor: pointer;
  height: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  margin: 1rem;
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
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
      &:hover {
        color: black;
        background: white;
        outline: 4px solid black;
        transition: all 0.5s ease-in-out;
      }
    }
    img {
      width: 300px;
    }
  }
}
</style>
