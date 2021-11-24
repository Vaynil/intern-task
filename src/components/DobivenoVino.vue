<template>
  <div class="tekst">
    <p>
      Ovo su vaši ponuđeni odabiri. Odaberite proizvode.
    </p>
    <img alt="vino1" width="200" height="300" src="@/assets/chardonnay.jpg" />
    <p>
      Chardonnay <br/> Ocjena 4.9/5 <br/> Cijena 50$
    </p>
    <img alt="vino2" width="300" height="300" src="@/assets/sauvignon-blanc.png" />
    <p>
      Sauvignon-Blanc <br/> Ocjena 4.6/5 <br/> Cijena 25$
    </p>
    <img alt="vino3" width="300" height="300" src="@/assets/pinot-grigio.jpg" />
    <p>
      Pinot Grigio <br/> Ocjena 4.7/5 <br/> Cijena 15$
    </p>
    <br/>
    <div class="control">
      <button class="button is-link">Dostava</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.tekst {
  overflow: hidden;
  padding: 20px;
  background: #ebe1a9;
  border-radius: 5px;
  max-width: 600px;
  margin: 0 auto;
  text-align:center;
}

.button {
  background-color: #e3776f;
  color: black;
}

p {
  margin-top: 20px;
}
</style>
