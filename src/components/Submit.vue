<template>
  <div class="tekst">
    <p>
    Hvala na upitu, javite ćemo Vam se mailom u najkraćem mogućem roku.
    </p>
      <br/>
      <button class="button is-link" @click="goToNaslovna">
         Nazad na naslovnu
      </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToNaslovna() {
      this.$router.push("/Naslovna");
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
