<template>
  <div class="cost">
    <div class="number">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "CostComponent",
  components: {},
  props: {
    number: Number,
  },
};
</script>


<style scoped lang="scss">
.cost {
  position: absolute;
  top: -5px;
  left: -5px;
  height: 60px;
  width: 60px;
  background: rgb(0, 115, 255);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  .number {
    font-size: 60px;
    color: white;
    font-weight: 900;
    font-style: italic;

    -webkit-text-stroke: 2px rgb(0, 0, 0);
  }
}
</style>
