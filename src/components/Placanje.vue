<template>
  <div class="tekst">
    <form>
      <p class="pocetak">Metoda plaćanja</p>
      <br />
      <div class="choose">
        <button class="dropbtn">Izaberite metodu plaćanja</button>
        <div class="choose-card" name="choose">
          <a href="#">Visa</a>
          <a href="#">Mastercard</a>
          <a href="#">PayPal</a>
        </div>
      </div>
      <p>Broj kartice</p>
      <div class="card">
        <div class="control">
          <input class="input" name="card" type="text" />
        </div>
      </div>
      <p>Rok upotrebe kartice</p>
      <div class="expireDate">
        <input class="input" name="day" type="number" />
        <input class="input" name="month" type="number" />
      </div>
      <p>Sigurnosni kod</p>
      <div class="code">
        <div class="control">
          <input class="input" name="secCode" type="number" />
        </div>
      </div>
      <br />
      <p class="pocetak">Podaci o naplati</p>
      <p>Ime</p>
      <div class="name">
        <div class="control">
          <input class="input" name="name" type="text" />
        </div>
      </div>
      <p>Prezime</p>
      <div class="surname">
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
      <p>Ulica,kućni broj</p>
      <div class="street">
        <div class="control">
          <input class="input" name="street" type="text" />
        </div>
      </div>
      <p>Ulica,kućni broj 2</p>
      <div class="street2">
        <div class="control">
          <input class="input" name="street2" type="text" />
        </div>
      </div>
      <p>Grad</p>
      <div class="city">
        <div class="control">
          <input class="input" name="city" type="text" />
        </div>
      </div>
      <p>Zip ili Poštanski broj</p>
      <div class="postalCode">
        <div class="control">
          <input class="input" name="postalCode" type="text" />
        </div>
      </div>
      <br /><br />
      <div class="isplata">
        <button
          class="button is-link"
          @click="isporuka"
          type="submit"
          value="Submit"
        >
          Isporuka
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      choose: null,
      card: null,
      day: null,
      month: null,
      secCode: null,
      name: null,
      surname: null,
      email: null,
      street: null,
      street2: null,
      city: null,
      postalCode: null,
    };
  },
  methods: {
    isporuka() {
      this.$buefy.notification.open(
        "Isporučeno, zahvaljujemo na korištenju naše aplikacije :)"
      );
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

.card {
  max-width: 40%;
}

.expireDate {
  max-width: 10%;
}

.code {
  max-width: 15%;
}

.name {
  max-width: 30%;
}

.surname {
  max-width: 35%;
}

.email {
  max-width: 50%;
}

.street {
  max-width: 50%;
}

.street2 {
  max-width: 50%;
}

.city {
  max-width: 40%;
}

.postalCode {
  max-width: 30%;
}

.button {
  background-color: #ebe1a9;
  color: black;
}

.dropbtn {
  background-color: #ebe1a9;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.choose {
  position: relative;
  display: inline-block;
}

.choose-card {
  display: none;
  background-color: #f1f1f1;
}

.choose-card a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.choose-card a:hover {
  background-color: #ddd;
}

.choose:hover .choose-card {
  display: block;
}

.choose:hover .dropbtn {
  background-color: #e3dec3;
}

.isplata {
  text-align: right;
}

p {
  margin-top: 20px;
}
</style>
