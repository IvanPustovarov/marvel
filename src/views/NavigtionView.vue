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
        &:hover {
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg)
            scale3d(1.035, 1.035, 1.035);
          transition: all 0.5s ease-out;
        }
      }
    }
    .links {
      padding: 0 0 0 10rem;
      display: flex;
      align-items: center;
      .item {
        padding: 0 1rem 0 0.3rem;
        // border-right: 1px solid white;
        // border-left: 1px solid white;
        height: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        font-size: 18px;
        a {
          text-decoration: none;
        }
        &:hover {
          background: linear-gradient(
            180deg,
            rgba(128, 70, 222, 0.9),
            rgb(35, 14, 83)
          );
          background-size: 200% 200%;
          //box-shadow: inset 0px 0px 17px 2px rgba(45, 195, 215, 0.5);
        }
      }
    }
  }
}
.br {
  height: 0.7rem;
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
