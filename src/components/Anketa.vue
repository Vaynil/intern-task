<template>
  <div class="tekst">
    <p>
      U ovoj anketi ćete nam odgovoriti na nekoliko pitanja kako bi Vam mogli preporučiti najbolje izbore naših Vina.
    </p>
    <br/><br/>
    <p class="thick">
      Imate li preferiranu boju vina koju želite?
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <p class="thick">
      Koji su vam najdraži okusi?
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <p class="thick">
      Imate li već brand koji volite koristiti, ako da koji?
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <p class="thick">
      Koja je prigoda?
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <p class="thick">
      Raspon cijena za vaš odabir vina.
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <br/>
    <p class="thick">
      Raspon ocjena za vaš odabir vina.
    </p>
    <div class="field">
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <div class="control">
      <button class="button is-link">Pošalji</button>
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
  max-width: 600px;
  margin: 0 auto;
  text-align:center;
}

p {
  margin-top: 20px;
}

p.thick {
  font-weight: bold;
}

.button {
  background-color: #ebe1a9;
  color: black;
}

</style>
