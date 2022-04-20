<template>
  <b-container fluid class="bv-example-row" style="margin: 0 auto; background-color: #DFDFDE; width: 100%;">
    <b-row>
      <b-col class="naslov" style="font-size: 48px; font-weight: bold;">OUR BOOKS</b-col>
      <div class="w-100"></div>
      <b-col>
        <form @submit.prevent="getData">
          <label>Book name: <input type="search" v-model="query" /></label>
            <input type="submit" />
        </form>
      </b-col>
    </b-row><hr />
    <b-row>
      <b-col>
        Current / Max: {{ page }} / {{ Math.ceil(total / 10) }}<br />
        <button class="button" v-if="page > 1" @click="setCurrentPage(-1)">PREV</button>
        <button class="button" v-if="page < total / 10" @click="setCurrentPage(1)">NEXT</button><br />
      </b-col>
    </b-row><br />
    <b-row cols-sm="1" cols-md="2" cols-lg="4" class="align-items-center">
      <div v-for="item in list" v-bind:key="item.id" 
      style="text-align:center; background-color: #F7F5F2; height:450px; align:middle; padding-top:80px;">
      <img class="bookImg" :src="item.image" v-on:click="getBookData" /> <br /> Naslov: {{ item.title }} <br /> 
      Podnaslov: {{ item.subtitle }} <br /> Code: {{ item.isbn13 }}
      </div>
    </b-row>
    <b-row>
      <b-col style="height:8em; padding:3em;">
        <p>VueJS by Filip Slamar</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwPagination from 'jw-vue-pagination';

Vue.component('jw-pagination', JwPagination);
Vue.use(VueAxios, axios);

export default {
  name: "PretragaKnjiga",
  data() {
    return {
      query: null,
      page: 1,
      list: [],
      total: Number(),
      isbn13: Number(),
      aboutBook: []
    };
  },
  methods: {
    async getData() {
      await axios
        .get(`https://api.itbook.store/1.0/search/${this.query}/${this.page}`)
        .then((resp) => {
          console.log(resp);
          this.list = resp.data.books;
          this.total = resp.data.total;
          console.log(resp.data.books);
          console.log(resp.data.total);
        });
    },
    async getBookData() {
      await axios
        .get(`https://api.itbook.store/1.0/books/${this.isbn13}`)
        .then((resp) => {
          console.log(resp);
          this.aboutBook = resp.data.authors;
          this.aboutBook = resp.data.publisher;
          this.aboutBook = resp.data.desc;
          console.log(resp.data.authors);
          console.log(resp.data.publisher);
          console.log(resp.data.desc);
        });
    },
    setCurrentPage(direction) {
      if (direction === -1 && this.page > 1) {
        this.page -= 1;
      } else if (
        direction === 1 &&
        this.page < this.total / 10
      ) {
        this.page += 1;
      }
      this.getData();
    }
  },
};
</script>

<style scoped lang="scss">
img{
  width: 49%;
}
.button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: #F56D91;
  background: #F7F5F2;
  line-height: 1.15;
  font-size: 16px;               
}
</style>
