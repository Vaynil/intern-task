<template>
  <div class="knjige">
    <div class="naslov">OUR BOOKS</div>
    <br />
    <section>
      <form @submit.prevent="getData">
        <label>Book name: <input type="search" v-model="query" /></label>
        <input type="submit" @click="isShowing ^= true"/>
      </form>
    </section>
    <br /><hr />
    <div v-show="isShowing">
    Current / Max: {{ page }} / {{ Math.ceil(total / 10) }}<br />
    <button class="button" v-if="page > 1" @click="setCurrentPage(-1)">PREV</button>
    <button class="button" v-if="page < total / 10" @click="setCurrentPage(1)">NEXT</button><br />
    </div>
    <br />
    <table class="tablica" border="2px solid">
      <tr v-for="item in list" v-bind:key="item.id">
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
      stranica:[],
      isShowing:false
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
.knjige{
  width:100%;
  background-color: #DFDFDE;
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

table tr:nth-child(odd) {
  background-color: #F7F5F2;
}

table tr:nth-child(even) {
  background-color: #F56D91;
}


p {
  margin-top: 20px;
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
