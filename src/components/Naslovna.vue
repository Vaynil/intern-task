<template>
  <div class="tekst">
    <h1>{{ msg }}</h1>
    <p>
      Dobrodošli u Vinoteku
    </p>
    <br/>
    <p>
      Ovdje ćete pronaći vina po vašem ukusu. Samo ispunite anketu odaberite vaše vino i dostavit ćemo na vašu adresu.
    </p>

    <br/>
    <section>
        <b-button @click="anketa">Anketa</b-button>
    </section>
    <br/>
    <h1>
    Kontaktirajte nas za bilo kakva pitanja:
    </h1>
    <br/>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Your Name">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Your Email">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Your Phone">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Your Message"></textarea>
      </div>
    </div>
    <div class="control">
      <button class="button is-link">Submit</button>
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
  background: #ebe1a9;
  border-radius: 5px;
}

p {
  margin-top: 20px;
}
</style>
