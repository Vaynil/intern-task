<template>
  <div class="tekst">
    <p class="pocetak">Ispunite potrebne podatke za dostavu</p>
    <br />
    <form @submit.stop.prevent="submitClick">
      <p>Ime</p>
      <div class="ime">
        <div class="control">
          <input class="input" name="name" v-model="name" type="text" required/>
        </div>
      </div>
      <p>Prezime</p>
      <div class="prezime">
        <div class="control">
          <input class="input" name="surname" v-model="surname" type="text" required/>
        </div>
      </div>
      <p>Vaš email</p>
      <div class="email">
        <div class="control">
          <input class="input" name="email" v-model="email" type="text" required/>
        </div>
      </div>
      <p>Telefon</p>
      <div class="telefon">
        <div class="control">
          <input class="input" name="number" v-model="number" type="number" required/>
        </div>
      </div>
      <p>Ulica,kućni broj</p>
      <div class="ulica">
        <div class="control">
          <input class="input" name="street" v-model="street" type="text" required/>
        </div>
      </div>
      <p>Grad</p>
      <div class="grad">
        <div class="control">
          <input class="input" name="city" v-model="city" type="text" required/>
        </div>
      </div>
      <p>Poštanski broj</p>
      <div class="postal">
        <div class="control">
          <input class="input" name="postalCode" v-model="postalCode" type="text" required/>
        </div>
      </div>
      <br/><br/>
      <div class="control">
        <button class="button is-link" @click="goToVino">
          Nazad na odabir vina
        </button>
      </div>
      <br/>
      <div class="control">
        <button
          class="button is-link" type="submit" value="Submit">
          Nastavi do plaćanja i isporuke
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: null,
      surname: null,
      email: null,
      number: null,
      street: null,
      city: null,
      postalCode: null,
    };
  },
  methods: {
    submitClick() {
      this.$router.push("/Placanje");
    },
    goToVino() {
      this.$router.push("/Vino");
    },
  },
};
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

.pocetak {
  font-weight: bold;
}

.ime {
  max-width: 30%;
}

.prezime {
  max-width: 35%;
}

.email {
  max-width: 50%;
}

.telefon {
  max-width: 50%;
}

.ulica {
  max-width: 50%;
}

.grad {
  max-width: 40%;
}

.postal {
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
