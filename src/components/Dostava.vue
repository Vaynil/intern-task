<template>
  <div class="tekst">
    <p>
      Ispunite potrebne podatke za dostavu
    </p>
    <br/><br/>
    <p>
      Ime
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Prezime
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Vaš email
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Telefon
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Ulica,kućni broj
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Grad
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Poštanski broj
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <div class="control">
      <button class="button is-link">Nastavi do plaćanja i isporuke</button>
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
  background: #e3776f;
  border-radius: 5px;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.button {
  background-color: #ebe1a9;
  color: black;
}

p {
  margin-top: 20px;
}
</style>

