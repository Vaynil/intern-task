<template>
  <div class="knjige">
    <div class="naslov">Our Books</div>
    <section>
      <form @submit.prevent="getData">
        <label>Book name: <input type="search" v-model="query" /> <br /><br /></label>
        <label>Book page: <input class="brojKnjiga" v-model="page" type="text" /></label>
        <input type="submit" />
      </form>
    </section>
    <br />
    <div class="pagination-row">
      <button class="pagination-button">PREV</button>
      <span v-for="(item,index) in new Array(10)" :key="index">
        <button class="pagination-button" @click="pageNumber = index + 1">{{index +1}}</button>
      </span>
      <button class="pagination-button">NEXT</button>
    </div>
    <br /><br />
    <label>Set posts per page: <input v-model="postsPerPage" type="text"/></label><br/>
    Current page / max page: {{ currentPage }} / {{ Math.ceil(list.length / postsPerPage) }}<br />
    <button @click="setCurrentPage(-1)">PREV</button>
    <button @click="setCurrentPage(1)">NEXT</button><br />
    <hr /><br />
    <table class="tablica" border="1px">
      <tr v-for="item in listaKnjiga" v-bind:key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.subtitle }}</td>
        <td>{{ item.isbn13 }}</td>
        <td><img class="bookImg" :src="item.image" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  name: "PretragaKnjiga",
  data() {
    return {
      query: null,
      page: null,
      list: [],
      stranica:[],
      currentPage: 2,
      postsPerPage: 5,
    };
  },
  computed: {
    listaKnjiga() {
      return this.list.slice(
        (this.currentPage - 1) * this.postsPerPage,
        this.currentPage * this.postsPerPage
      );
    },
  },
  methods: {
    async getData() {
      await axios
        .get(`https://api.itbook.store/1.0/search/${this.query}/${this.page}`)
        .then((resp) => {
          this.list = resp.data.books;
          console.log(resp.data.books);
        });
    },
    setCurrentPage(direction) {
      if (direction === -1 && this.currentPage > 1) {
        this.currentPage -= 1;
      } else if (
        direction === 1 &&
        this.currentPage < this.list.length / this.postsPerPage
      ) {
        this.currentPage += 1;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.pagination-button{
  padding: 6px;
  margin: 2px;
  border-radius: 2px;
  font-size: 1em;
  cursor:pointer;
}
.tekst {
  overflow: hidden;
  padding: 20px;
  background: #ebe1a9;
  border-radius: 5px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.knjige{
  width:100%;
}
.brojKnjiga{
  width:7%;
}

.pocetak {
  font-size: 24px;
  font-weight: bold;
}
.bookImg {
  width: 80%;
}

.tablica {
  width: 100%;
}

p {
  margin-top: 20px;
}

.button {
  background-color: #d18484;
  color: black;
}

</style>
