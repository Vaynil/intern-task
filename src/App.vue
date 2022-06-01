<template>
  <div class="app">
    <router-link to="pretragaKnjiga">
      <img alt="naslovna logo" class="img-fluid" style="width: 50%; padding: 15px" src="./assets/book.png"/>
    </router-link>
  <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
  text-align: center;
  background-color: #8d8daa;
}
</style>
