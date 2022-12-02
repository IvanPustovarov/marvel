<template>
  <div class="container-of-location" @click="goToLocation">
    <div class="location">
      <img
        :src="require(`@/assets/location/${name}.webp`)"
        alt="location"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationComponent",
  components: {},
  props: {
    name: String,
    description: String,
  },
  data() {
    return {
    };
  },
  methods: {
    goToLocation() {
      return this.$router.push(`/location/${this.name}`);
    },
  },
};
</script>


<style scoped lang="scss">
.container-of-location {
//   cursor: pointer;
//   height: 24rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-content: flex-start;
//   margin: 1rem;
  .location {
    // display: flex;
    // align-items: center;
    // flex-direction: column;
    // .description {
    //   display: flex;
    //   flex-direction: column;
    //   color: white;
    //   font-weight: 500;
    //   font-size: 14px;
    //   width: 15rem;
    //   text-align: center;
    //   background: rgb(0, 0, 0);
    //   padding: 5px;
    //   border-radius: 10px;
    //   span {
    //     font-size: 17px;
    //     font-weight: 600;
    //   }
    //   &:hover {
    //     color: black;
    //     background: white;
    //     outline: 4px solid black;
    //     transition: all 0.5s ease-in-out;
    //   }
    // }
    img {
      width: 300px;
    }
  }
}

// ::v-deep .span-ability {
//       font-size: 17px;
//       font-weight: 600;
//   }
</style>
