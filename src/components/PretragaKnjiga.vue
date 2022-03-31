<template>
  <div class="knjige">
    <div class="naslov">Our Books</div>
    <section>
      <form @submit.prevent="getData">
        <input type="search" v-model="query">
        <input type="submit">
      </form>
    </section>
    <br/>
    <table border="1px">
      <tr v-for="item in list" v-bind:key="item.id">
        <td>{{item.title}}</td>
        <td>{{item.subtitle}}</td>
        <td>{{item.isbn13}}</td>
        <td><img class="bookImg" :src="item.image"></td>
      </tr>
    </table>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
  name:"PretragaKnjiga",
  data()
  {
    return{
      query : null,
      list:[]
    }
  },
  methods:{
    async getData(){
    await axios.get(`https://api.itbook.store/1.0/search/${this.query}`)
    .then((resp)=>{
      this.list=resp.data.books;
      console.log(resp.data.books)
    })
  }}
}
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
.bookImg{
  width:80%;
}

p {
  margin-top: 20px;
}

.button {
  background-color: #d18484;
  color: black;
}
</style>
