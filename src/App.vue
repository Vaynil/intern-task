<template>
  <div class="app">
    <img alt="naslovna logo" src="./assets/book.png" />
    <PretragaKnjiga />
    <footer class="footer">
      <div id="footer">
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
  background-color: #8D8DAA;
}

.naslov {
  font-size: 48px;
  font-weight: bold;
}

.footer {
  background-color: #F7F5F2;
  max-height: 200px;
}

img {
  width: 30%;
  padding: 15px;
}
</style>
