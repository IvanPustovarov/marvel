<template>
  <div class="power">
    <div class="top"></div>
    <div class="middle">
      <div class="number">{{ number }}</div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "PowerComponent",
  components: {},
  props: {
    number: Number,
  },
};
</script>


<style scoped lang="scss">
.power {
  position: absolute;
  top: -40px;
  right: 0px;
  .top {
    border: 30px solid transparent;
    border-bottom: 20px solid chocolate;
  }
  .middle {
    height: 30px;
    width: 60px;
    background: chocolate;

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
  .bottom {
    border: 30px solid transparent;
    border-top: 20px solid chocolate;
  }
}
</style>
