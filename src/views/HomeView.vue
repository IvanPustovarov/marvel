<template>
  <div class="container">
    <div class="left-nav">
      <p>Some text here</p>
    </div>
    <div class="right-contant"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>


<style scoped lang="scss">
.container {
  background-color: rgb(209, 241, 241);
  flex-direction: row;
  display: flex;
  width: 100vw;
  .left-nav {
    flex: 1;
    margin: 0.5rem 0 0.5rem 0.5rem;
    .title {
      height: 5rem;
    }
  }
  .right-contant {
    flex: 1;
  }
}
</style>
