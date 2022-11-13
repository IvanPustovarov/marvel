<template>
  <div class="nav-panel">
    <nav>
      <div class="logo-img">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/cards">Cards</router-link> |
        <router-link to="/locations">Locations</router-link>
      </div>
    </nav>
    <div class="br"></div>
  </div>
</template>

<script>
export default {
  name: "NavigationView",
  components: {},
};
</script>


<style scoped lang="scss">
.nav-panel {
  width: 100%;
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
      }
    }
    .links {
      padding: 2rem 0 1.5rem 10rem;
      display: flex;
      align-items: center;
    }
  }
}
.br {
  height: 1rem;
  background: linear-gradient(-45deg, #ed193b, #a98055, #f286e2, #681d7a);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
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
