<template>
  <div class="app">
    <img alt="naslovna logo" src="./assets/book.png" />
    <PretragaKnjiga />
    <footer class="footer">
      <div class="footer">
        <p>VueJS by Filip Slamar</p>
      </div>
    </footer>
  </div>
</template>

<script>
import PretragaKnjiga from "./components/PretragaKnjiga";
export default {
  name: "App",
  components: {
    PretragaKnjiga,
  },
};
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
  text-align: center;
}

.naslov {
  font-size: 48px;
  font-weight: bold;
}

.footer {
  background: #d1d1d1;
  max-height: 200px;
}

a {
  font-weight: bold;
  padding: 30px;
  &.router-link-exact-active {
    color: #d18484;
  }
}

img {
  width: 30%;
}
</style>
