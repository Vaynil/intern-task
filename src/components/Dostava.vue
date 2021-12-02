<template>
  <div class="tekst">
    <p class="pocetak">
      Ispunite potrebne podatke za dostavu
    </p>
    <br/>
    <p>
      Ime
    </p>
    <div class="ime">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Prezime
    </p>
    <div class="prezime">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Vaš email
    </p>
    <div class="email">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Telefon
    </p>
    <div class="telefon">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Ulica,kućni broj
    </p>
    <div class="ulica">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Grad
    </p>
    <div class="grad">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Poštanski broj
    </p>
    <div class="postal">
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
  background: #d18484;
  border-radius: 5px;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.pocetak{
  font-weight:bold;
}

.ime{
  max-width: 30%;
}

.prezime{
  max-width: 35%;
}

.email{
  max-width: 50%;
}

.telefon{
  max-width: 50%;
}

.ulica{
  max-width: 50%;
}

.grad{
  max-width: 40%;
}

.postal{
  max-width: 30%;
}

.button {
  background-color: #ebe1a9;
  color: black;
}

p {
  margin-top: 20px;
}
</style>

