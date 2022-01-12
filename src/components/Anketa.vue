<template>
  <div class="tekst">
    <p class="thick">
      U ovoj anketi ćete nam odgovoriti na nekoliko pitanja kako bi Vam mogli
      preporučiti najbolje izbore naših Vina.
    </p>
    <br /><br />
    <form>
      <p class="thick">Imate li preferiranu boju vina koju želite?</p>
      <div class="field">
        <div class="control">
          <input class="input" name="odg1" v-model="odg1" type="text" />
        </div>
      </div>
      <br />
      <p class="thick">Koji su vam najdraži okusi?</p>
      <div class="field">
        <div class="control">
          <input class="input" name="odg2" v-model="odg2" type="text" />
        </div>
      </div>
      <br />
      <p class="thick">
        Imate li već brand koji volite koristiti, ako da koji?
      </p>
      <div class="field">
        <div class="control">
          <input class="input" name="odg3" v-model="odg3" type="text" />
        </div>
      </div>
      <br />
      <p class="thick">Koja je prigoda?</p>
      <div class="field">
        <div class="control">
          <input class="input" name="odg4" v-model="odg4" type="text" />
        </div>
      </div>
      <br />
      <p class="thick">Raspon cijena za vaš odabir vina.</p>
      <div class="field">
        <div class="control">
          <input class="input" name="odg5" v-model="odg5" type="text" />
        </div>
      </div>
      <br />
      <p class="thick">Raspon ocjena za vaš odabir vina.</p>
      <div class="field">
        <div class="control">
          <input class="input" name="odg6" v-model="odg6" type="text" />
        </div>
      </div>
      <div class="control">
        <button class="button is-link" @click="goToDobivenoVino" type="submit" value="Submit">
          Odabir Vina
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
