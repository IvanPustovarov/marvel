<template>
  <div class="container-result">
    <div class="search-result" v-if="names.length || descriptions.length">
      <div class="results descriptions">
        <div v-for="item in descriptions"
            :key="item.name"
            @click="goToCard(item.name)"
        >
            <span>{{item.name}}</span>
            <p>{{item.description}}</p>
        </div>
      </div>
      <div class="results names">
        <div v-for="item in names"
            :key="item.name"
            @click="goToCard(item.name)"
        >
            <span>{{item.name}}</span>
            <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResultComponent",
  components: {},
  props: {
    names: {
      type: Array,
      default() {
        return [];
      }
    },
    descriptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    goToCard(value) {
      return this.$router.push(`/card/${value}`);
    },
  },
  computed: {
  }
};
</script>


<style scoped lang="scss">
.container-result{
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    .search-result{
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 1;

        .results{
            position: absolute;
            background: linear-gradient(
            180deg,
            rgba(128, 70, 222, 0.9),
            rgb(35, 14, 83)
          );
            background-size: 400% 400%;
            padding: 0 1rem 0 1rem;
            border-radius: 5px;
            div{
                cursor: pointer;
                margin-bottom: 0.5rem;
                border-radius: 5px;
                span{
                    background: black;
                    border-top-left-radius: 5px;
                    color: white;
                     &:hover{
                        background: inherit;
                    }
                }
                p{
                    color: white;
                }
                &:hover {
                  background: rgb(35, 14, 83);
                  background-size: 400% 400%;
                }
            }
        }
    }
}
</style>
