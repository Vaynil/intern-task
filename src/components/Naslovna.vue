<template>
  <div class="tekst">
    <p class="pocetak">Dobrodošli u Vinoteku</p>
    <br />
    <img alt="slika1" src="@/assets/slika1.jpg" />
    <br />
    <p>
      Malo informacija o vinu. <br /><br />
      Vino je alkoholno piće koje se proizvodi fermentacijom grožđa, ploda
      biljke vinove loze (lat. Vitis Vinifera), ali se može dobiti i od drugog
      voća, a ponekad i od žitarica. Jedan je od najstarijih poljoprivrednih
      proizvoda.
      <br /><br />Kemijska uravnoteženost grožđa omogućava prirodnu fermentaciju
      bez dodataka šećera, kiselina, enzima, vode ili bilo kojih drugih
      sastojaka. U procesu fermentacije, koji se još naziva i alkoholno vrenje,
      kvasac se hrani šećerom iz grožđa i pretvara ga u alkohol i ugljični
      dioksid. Vino je jedno od najpopularnijih alkoholnih pića u svijetu, a
      smatra se i jednim od najvažnijih sastojaka europskih i svih mediteranskih
      kuhinja. <br />
    </p>
    <br /><br />
    <p>
      Ovdje ćete pronaći vina po vašem ukusu. Odaberite vino po vašemu ukusu i mi ćemo Vam dostaviti u
      najkraćem roku na Vašu kućnu adresu. Kako bi došli do naših najboljih izbora Vina trebate
      ispuniti našu anketu za poboljšanje naših budućih ponuda.
    </p>
    <br />
    <img alt="slika2" src="@/assets/slika2.jpg" />
    <br />
    <section>
      <b-button @click="goToAnketa">Anketa</b-button>
    </section>
    <br /><br />
    <h1>Kontaktirajte nas za bilo kakva pitanja:</h1>
    <br />
    <form id="app" @submit.stop.prevent="submitClick">
      <div class="control">
        <input class="input" name="name" v-model="name" type="text" placeholder="Ime" required/>
      </div>
      <br />
      <div class="control">
        <input class="input" name="email" v-model="mail" type="text" placeholder="Email" required/>
      </div>
      <br />
      <div class="control">
        <input class="input" name="number" v-model="phone" type="text" placeholder="Telefon" required/>
      </div>
      <br />
      <div class="control">
        <textarea class="textarea" v-model="poruka" name="msg" placeholder="Poruka" required></textarea>
      </div>
      <br />
      <div class="control">
        <button class="button is-link" type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      errors: [],
      name: null,
      mail: null,
      phone: null,
      poruka: null,
    };
  },
  methods: {
    goToAnketa() {
      this.$router.push("/Anketa");
    },
    submitClick() {
      this.$router.push("/Submit");
    },
  },
};
</script>

<style scoped lang="scss">
.tekst {
  overflow: hidden;
  padding: 20px;
  background: #ebe1a9;
  border-radius: 5px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.pocetak {
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
