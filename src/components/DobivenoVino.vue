<template>
  <div class="tekst">
    <p class="thick">Ovo su vaši ponuđeni odabiri. Odaberite proizvode.</p>
    <img alt="vino1" width="200" height="300" src="@/assets/chardonnay.jpg" @click="goToDostava" />
    <ul>
      <li v-for="item in vino1" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino2" width="300" height="300" src="@/assets/sauvignon-blanc.png" @click="goToDostava" />
    <ul>
      <li v-for="item in vino2" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino3" width="300" height="300" src="@/assets/pinot-grigio.jpg" @click="goToDostava" />
    <ul>
      <li v-for="item in vino3" :key="item">{{ item }}</li>
    </ul>
    <br />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      vino1: ["Chardonnay", "Ocjena 4.9/5", "Cijena 50$"],
      vino2: ["Sauvignon-Blanc", "Ocjena 4.6/5", "Cijena 25$"],
      vino3: ["Pinot Grigio", "Ocjena 4.7/5", "Cijena 15$"],
    };
  },
  methods: {
    goToDostava() {
      this.$router.push("/Dostava");
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

p.thick {
  font-weight: bold;
}

.button {
  background-color: #d18484;
  color: black;
}

p {
  margin-top: 20px;
}
</style>
