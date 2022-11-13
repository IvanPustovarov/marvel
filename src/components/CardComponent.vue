<template>
  <div class="container">
    <div class="card">
      <img :src="require(`@/assets/cards/${name}.webp`)" alt="" />
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
  },
};
</script>


<style scoped lang="scss">
.container {
  cursor: pointer;
  height: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
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
      span {
        font-size: 18px;
        font-weight: 600;
      }
    }
    img {
      width: 300px;
    }
  }
}
</style>
