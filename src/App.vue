<template>
  <div id="app">
    <img alt="naslovna logo" src="./assets/naslovna.jpg" />
    <router-link to="naslovna">Naslovna</router-link>
    <router-link to="anketa">Anketa</router-link>
    <router-link to="dobivenoVino">DobivenoVino</router-link>
    <router-link to="dostava">Dostava</router-link>
    <router-view/>
    <footer class="footer">
    <div class="footer">
      <p>
        Vue by Filip Slamar
      </p>
    </div>  
    </footer>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  text-align:center;
}

.footer {
background: #f0efef;
}

a {
  padding: 20px;
}

img {
  display: block;
  margin: 30px auto;
}
</style>
