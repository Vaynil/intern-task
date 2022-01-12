<template>
  <div class="tekst">
    <p class="pocetak">Ispunite potrebne podatke za dostavu</p>
    <br />
    <form>
      <p>Ime</p>
      <div class="ime">
        <div class="control">
          <input class="input" name="name" type="text" />
        </div>
      </div>
      <p>Prezime</p>
      <div class="prezime">
        <div class="control">
          <input class="input" name="surname" type="text" />
        </div>
      </div>
      <p>Vaš email</p>
      <div class="email">
        <div class="control">
          <input class="input" name="email" type="text" />
        </div>
      </div>
      <p>Telefon</p>
      <div class="telefon">
        <div class="control">
          <input class="input" name="number" type="number" />
        </div>
      </div>
      <p>Ulica,kućni broj</p>
      <div class="ulica">
        <div class="control">
          <input class="input" name="street" type="text" />
        </div>
      </div>
      <p>Grad</p>
      <div class="grad">
        <div class="control">
          <input class="input" name="city" type="text" />
        </div>
      </div>
      <p>Poštanski broj</p>
      <div class="postal">
        <div class="control">
          <input class="input" name="postalCode" type="text" />
        </div>
      </div>
      <br/><br/>
      <div class="control">
        <button class="button is-link" @click="goToDobivenoVino" type="submit" value="Submit">
          Nazad na odabir vina
        </button>
      </div>
      <br/>
      <div class="control">
        <button
          class="button is-link"
          @click="goToPlacanje"
          type="submit"
          value="Submit">
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
    goToPlacanje() {
      this.$router.push("/Placanje");
    },
    goToDobivenoVino() {
      this.$router.push("/dobivenoVino");
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
