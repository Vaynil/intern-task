<template>
  <div class="app">
    <img alt="naslovna logo" src="./assets/naslovna.jpg" />
    <div class="naslov">Vinoteka</div><br/>
    <router-link to="naslovna">Naslovna</router-link>
    <router-link to="anketa">Anketa</router-link>
    <router-link to="dobivenoVino">DobivenoVino</router-link>
    <router-link to="dostava">Dostava</router-link>
    <router-link to="plaćanje">Plaćanje</router-link>
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
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
  text-align:center;
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
    color: #42b983;
  }
}

img {
  display: block;
  margin: 30px auto;
}
</style>
