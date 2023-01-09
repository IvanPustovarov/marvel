<template>
  <div class="container-result">
    <div class="search-result cont-all" v-if="names.length || descriptions.length">
      <div class="results descriptions" v-if="descriptions.length">
        <div v-for="item in descriptions"
            :key="item.name"
            @click="goToCard(item.name)"
        >
            <span>{{item.name}}</span>
            <p>{{item.description}}</p>
        </div>
      </div>
      <div class="results names" v-if="names.length">
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
      this.$emit('search');
      return this.$router.push(`/card/${value}`);
    },
  },
  computed: {
  }
};
</script>


<style scoped lang="scss">
@import '../assets/styles/_search-result.scss';
</style>
