<template>
  <div class="nav-panel">
    <nav>
      <div class="logo-img">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="links">
        <div class="item">
          <router-link to="/">Главная</router-link>
        </div>
        <div class="item">
          <router-link to="/cards">Карты</router-link>
        </div>
        <div class="item">
          <router-link to="/locations">Локации</router-link>
        </div>
      </div>
      <SearchComponent />
    </nav>
    <div class="br"></div>
  </div>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  name: "NavigationView",
  components: { SearchComponent },
};
</script>


<style scoped lang="scss">
@import '../assets/styles/style';

.nav-panel {
  width: 100%;
  min-height: 5rem;
  nav {
    background-color: rgb(27, 30, 41);
    display: flex;
    flex-direction: row;
    position: relative;
    a {
      font-style: italic;
      font-weight: bold;
      color: #ffffff;

      &.router-link-exact-active {
        color: #ffffff;
      }
    }
    .logo-img {
      position: absolute;
      cursor: pointer;
      top: 5px;
      left: 14px;
      height: 5rem;
      img {
        width: 80%;
        &:hover {
          transform: $trans-3d;
          transition: $transit-easy;
        }
      }
    }
    .links {
      padding: 0 0 0 10rem;
      display: flex;
      align-items: center;
      .item {
        padding: 0 0 0 0.3rem;
        height: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        font-size: 18px;
        a {
          text-decoration: none;
          padding: 2.5rem 1rem 2.5rem 0;
        }
        &:hover {
          background: $back-gradient;
          background-size: $back-size-sm;
        }
      }
    }
  }
  .br {
  height: 0.7rem;
  background: linear-gradient(-45deg, #ed193b, #a98055, #f286e2, #681d7a);
  background-size: $back-size-md;
  animation: gradient 10s ease infinite;
}
}


@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
