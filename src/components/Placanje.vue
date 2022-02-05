<template>
  <div class="tekst">
    <form id="app" @submit.stop.prevent="submitClick">
      <p class="pocetak">Metoda plaćanja</p>
      <br />
      <div class="choose">
        <button class="dropbtn">Izaberite metodu plaćanja</button>
        <div class="choose-card" name="choose">
          <select class="input" name="choose" v-model="choose" required>
            <option>Visa</option>
            <option>Mastercard</option>
            <option>PayPal</option>
          </select>
        </div>
      </div>
      <p>Broj kartice</p>
      <div class="card">
        <div>
          <input class="input" name="card" v-model="card" type="text" required/>
        </div>
      </div>
      <p>Rok upotrebe kartice</p>
      <div class="expireDate">
        <input class="input" name="day" v-model="day" type="number" required/>
        <input class="input" id="rok1" name="month" v-model="month" type="number" required/>
      </div>
      <p>Sigurnosni kod</p>
      <div class="code"><input class="input" name="secCode" v-model="secCode" type="number" required/></div>

      <br />
      <p class="pocetak">Podaci o naplati</p>
      <p>Ime</p>
      <div class="name">
        <div>
          <input class="input" name="name" v-model="name" type="text" required/>
        </div>
      </div>
      <p>Prezime</p>
      <div class="surname">
        <div>
          <input class="input" name="surname" v-model="surname" type="text" required/>
        </div>
      </div>
      <p>Vaš email</p>
      <div class="email">
        <div>
          <input class="input" name="email" v-model="email" type="email" required/>
        </div>
      </div>
      <p>Ulica,kućni broj</p>
      <div class="street">
        <div>
          <input class="input" name="street" v-model="street" type="text" required/>
        </div>
      </div>
      <p>Ulica,kućni broj 2</p>
      <div class="street2">
        <div>
          <input class="input" name="street2" v-model="street2" type="text" />
        </div>
      </div>
      <p>Grad</p>
      <div class="city">
        <div>
          <input class="input" name="city" v-model="city" type="text" required/>
        </div>
      </div>
      <p>Zip ili Poštanski broj</p>
      <div class="postalCode">
        <div>
          <input class="input" name="postalCode" v-model="postalCode" type="string" required/>
        </div>
      </div>
      <br /><br />
      <div class="isplata">
        <button
          class="button is-link" type="submit" value="Submit">
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
    submitClick() {
      this.$router.push("/naslovna");
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
  max-width: 25%;
  display:flex;
  justify-content: space-between;
}

#rok1{
  margin: 0 10px;
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
  display: block;
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
