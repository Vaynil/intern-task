<template>
  <div class="tekst">
    <p class="thick">
      Ispunite ovu anketi u sklopu pomoći našem istraživanju na kojem ćete nam odgovoriti na nekoliko pitanja 
      kako bi Vi mogli nama pomoći da Vam u budućnosti izađemo u susret s još boljim izborima vina.
    </p>
    <br /><br />
    <form id="app" @submit.stop.prevent="submitClick">
      <p class="thick">Koja je Vaša preferirana boja vina koju volite?</p>

        <div class="control">
          <select class="input" name="odg1" v-model="odg1" required>
            <option>Bijela</option>
            <option>Rose</option>
            <option>Crna</option>
          </select>
        </div>
      <br />
      <p class="thick">Koji su vam najdraži okusi?</p>

          <div class="control">
            <select class="input" name="odg2" v-model="odg2" required>
            <option>Slatki</option>
            <option>Slani</option>
            <option>Kiseli</option>
            <option>Gorki</option>
          </select>
          </div>
      <br />
      <p class="thick">
        Imate li već brand koji volite koristiti, ako da koji?
      </p>

        <div class="control">
          <select class="input" name="odg3" v-model="odg3" required>
            <option>Chardonnay</option>
            <option>Graševina</option>
            <option>Malvazija Istarska</option>
            <option>Galić</option>
            <option>Laguna Rose</option>
            <option>Pošip</option>
            <option>Plavac Mali</option>
            <option>Frankovka</option>
            <option>Babić</option>
          </select>
        </div>
      <br />
      <p class="thick">Na kakvim prigodama najviše volite popiti čašu vina?</p>

        <div class="control">
          <select class="input" name="odg4" v-model="odg4" required>
            <option>Zabava</option>
            <option>Vjenčanje</option>
            <option>Poslovni domjenak</option>
            <option>Vikend druženje</option>
          </select>
        </div>
      <br />
      <p class="thick">Ako gledate ocjene mišljenja stručnjaka/kupaca za vino u kojem rasponu želite njihove ocjene?</p>

        <div class="control">
          <select class="input" name="odg5" v-model="odg5" required>
            <option>3 - 4</option>
            <option>4 - 5</option>
          </select>
        </div>
      <br />
      <p class="thick">U kojem rasponu cijena najčešće gledate koje ćete vino kupiti?</p>
      
        <div class="control">
          <select class="input" name="odg6" v-model="odg6" required>
            <option>0 - 15 kn</option>
            <option>15 - 40 kn</option>
            <option>40 - 100 kn</option>
            <option> Preko 100 kn</option>
          </select>
        </div>
      <br />  
      <div class="control">
        <button class="button is-link" type="submit" value="Submit">
          Odaberi vino
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      odg1: null,
      odg2: null,
      odg3: null,
      odg4: null,
      odg5: null,
      odg6: null,
    };
  },
  methods: {
    submitClick() {
      this.$router.push("/vino");
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
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
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
