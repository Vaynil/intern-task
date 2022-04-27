<template>
  <div class="app">
    <img
      alt="naslovna logo"
      class="img-fluid"
      style="width: 30%; padding: 15px"
      src="./assets/book.png"
    />
    <PretragaKnjiga />
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
  background-color: #8d8daa;
}
</style>
