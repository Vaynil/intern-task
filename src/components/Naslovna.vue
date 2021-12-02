<template>
  <div class="tekst">
    <p class="pocetak">
      Dobrodošli u Vinoteku
    </p>
    <br/>
    <img alt="slika1" src="@/assets/slika1.jpg" />
    <br/>
    <p>
      Malo informacija o vinu. <br/><br/>
      Vino je alkoholno piće koje se proizvodi fermentacijom grožđa, ploda biljke vinove loze (lat. Vitis Vinifera), ali se može dobiti i od drugog voća, a ponekad i od žitarica. Jedan je od najstarijih poljoprivrednih proizvoda.
      <br/><br/>Kemijska uravnoteženost grožđa omogućava prirodnu fermentaciju bez dodataka šećera, kiselina, enzima, vode ili bilo kojih drugih sastojaka. U procesu fermentacije, koji se još naziva i alkoholno vrenje, kvasac se hrani šećerom iz grožđa i pretvara ga u alkohol i ugljični dioksid. Vino je jedno od najpopularnijih alkoholnih pića u svijetu, a smatra se i jednim od najvažnijih sastojaka europskih i svih mediteranskih kuhinja. <br/>
    </p>
    <br/><br/>
    <p>
      Ovdje ćete pronaći vina po vašem ukusu. Samo ispunite anketu odaberite vaše vino i dostavit ćemo na vašu adresu.
    </p>
    <br/>
    <img alt="slika2" src="@/assets/slika2.jpg" />
    <br/>
    <section>
        <b-button @click="anketa">Anketa</b-button>
    </section>
    <br/>
    <h1>
    Kontaktirajte nas za bilo kakva pitanja:
    </h1>
    <br/>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Ime">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Email">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Telefon">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Vaša Poruka"></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-link">Submit</button>
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

.pocetak{
  font-size: 24px;
  font-weight: bold;
}

p {
  margin-top: 20px;
}

.button {
  background-color: #d18484;
  color: black;
}

</style>
