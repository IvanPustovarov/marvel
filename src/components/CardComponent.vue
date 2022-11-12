<template>
  <div class="container">
    <div class="card">
      <img :src="require(`@/assets/cards/${name}.webp`)" alt="" />
      <p class="description">{{ description }}</p>
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
};
</script>


<style scoped lang="scss">
.container {
  position: relative;
  width: 300px;
  height: 305px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    .description {
      color: white;
      font-weight: 500;
    }
    img {
      width: 300px;
    }
  }
}
</style>
