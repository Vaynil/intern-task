<template>
  <div class="tekst">
    <p class="pocetak">
      Metoda plaćanja
    </p>
    <br/>
    <div class="dropdown">
        <button class="dropbtn">Izaberite metodu plaćanja</button>
        <div class="dropdown-content">
            <a href="#">Visa</a>
            <a href="#">Mastercard</a>
            <a href="#">PayPal</a>
        </div>
    </div>
    <p>
      Broj kartice
    </p>
    <div class="kartica">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Rok upotrebe kartice
    </p>
    <div class="rok">
        <input class="input" type="number">
        <input class="input" type="number">
    </div>
    <p>
      Sigurnosni kod
    </p>
    <div class="kod">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <p class="pocetak">
      Podaci o naplati
    </p>
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
      Ulica,kućni broj
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <p>
      Ulica,kućni broj 2
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
      Zip ili Poštanski broj
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <b-checkbox>Zapamti metodu plaćanja</b-checkbox>
    <br/><br/>
    <div class="isplata">
      <button class="button is-link">Isplata</button>
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
  font-weight: bold;
}

.kartica{
    max-width: 40%;
}

.rok{
    max-width: 10%;
}

.kod{
    max-width: 10%;
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

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content{
    display: none;
    background-color: #f1f1f1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #e3dec3;}

.isplata{
    text-align: right;
}

p {
  margin-top: 20px;
}
</style>