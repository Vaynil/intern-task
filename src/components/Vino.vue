<template>
  <div class="tekst">
    <p class="thick">Ovo su naši najbolji proizvodi u ponudi. Odaberite vaš izbor.</p>
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
    <img alt="vino4" width="300" height="300" src="@/assets/grasevina.jpg" @click="goToDostava" />
    <ul>
      <li v-for="item in vino4" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino5" width="300" height="300" src="@/assets/malvazija-istarska.jpeg" @click="goToDostava" />
    <ul>
      <li v-for="item in vino5" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino6" width="200" height="200" src="@/assets/galic-rose.jpg" @click="goToDostava" />
    <ul>
      <li v-for="item in vino6" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino7" width="300" height="300" src="@/assets/posip.jpg" @click="goToDostava" />
    <ul>
      <li v-for="item in vino7" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino8" width="400" height="400" src="@/assets/plavac-mali.jpg" @click="goToDostava" />
    <ul>
      <li v-for="item in vino8" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino9" width="300" height="300" src="@/assets/frankovka.png" @click="goToDostava" />
    <ul>
      <li v-for="item in vino9" :key="item">{{ item }}</li>
    </ul>
    <img alt="vino10" width="400" height="300" src="@/assets/babic.png" @click="goToDostava" />
    <ul>
      <li v-for="item in vino10" :key="item">{{ item }}</li>
    </ul>
    <br />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      vino1: ["Chardonnay", "Ocjena 4.9/5", "Cijena: 50 kn"],
      vino2: ["Sauvignon Blanc", "Ocjena 4.2/5", "Cijena: 25 kn"],
      vino3: ["Pinot Grigio", "Ocjena 4.7/5", "Cijena: 150 kn"],
      vino4: ["Grasevina", "Ocjena 4.7/5", "Cijena 10 kn"],
      vino5: ["Malvazija Istarska", "Ocjena 4.7/5", "Cijena 25 kn"],
      vino6: ["Galic", "Ocjena 4.7/5", "Cijena 35 kn"],
      vino7: ["Posip", "Ocjena 4.7/5", "Cijena 40 kn"],
      vino8: ["Plavac Mali", "Ocjena 4.7/5", "Cijena 75 kn"],
      vino9: ["Frankovka", "Ocjena 4.7/5", "Cijena 45 kn"],
      vino10: ["Babic", "Ocjena 4.7/5", "Cijena 35 kn"],
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
