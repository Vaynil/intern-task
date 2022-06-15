<template>
  <b-container fluid class="bv-example-row" style="margin: 0 auto; background-color: #dfdfde; width: 100%">
    <b-row>
      <br/>
      <div class="w-100"></div>
      <b-col>
        <form @submit.prevent="getData">
          <label>Book name: <input type="search" v-model="query" /></label>
          <input type="submit" />
        </form>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        Current / Max: {{ page }} / {{ Math.ceil(total / 10) }}<br />
        <button class="button" v-if="page > 1" @click="setCurrentPage(-1)">
          PREV
        </button>
        <button class="button" v-if="page < total / 10" @click="setCurrentPage(1)">
          NEXT
        </button>
        <br />
      </b-col>
    </b-row>
    <br />
    <b-row cols-sm="1" cols-md="2" cols-lg="4" class="align-items-center" align-v="stretch" padding="10px">
      <div :id="item.isbn13" v-for="item in list" v-bind:key="item.id" style="background-color: #f7f5f2">
        <img :src="item.image" @click="getBookData($event)" /><br />
        <p>
          Naslov: {{ item.title }} <br />
          Podnaslov: {{ item.subtitle }} <br />
          ISBN: {{ item.isbn13 }}
        </p>
      </div>
    </b-row>
    <b-row>
      <b-col style="height: 8em; padding: 3em">
        <p>VueJS by Filip Slamar</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwPagination from "jw-vue-pagination";
import { BContainer } from "bootstrap-vue";
import { BRow } from "bootstrap-vue";
import { BCol } from "bootstrap-vue";
import router from "@/router";
import { eventBus } from "@/main.js"

Vue.use(VueAxios, axios);
Vue.component("jw-pagination", JwPagination);
Vue.component("b-container", BContainer);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);

export default {
  name: "PretragaKnjiga",
  data() {
    return {
      query: null,
      page: 1,
      list: [],
      total: Number(),
      expandedDivIds: [],
    };
  },
  methods: {
    //function for switching page numbers
    setCurrentPage(direction) {
      if (direction === -1 && this.page > 1) {
        this.page -= 1;
        //for loop that deletes element from array by iterating through array
        //starting from last index loop goes through delete function
        //deletes element from array => array length = 1, loop goes to element n0. 2
        //that doesnt exist => loop ends
        for (let i = this.expandedDivIds.length - 1; i >= 0; i--) {
          this.deleteAdditionalElement(this.expandedDivIds[i].substring(4));
        }
      } else if (direction === 1 && this.page < this.total / 10) {
        this.page += 1;
        //second loop because we have PREV and NEXT options
        for (let i = this.expandedDivIds.length - 1; i >= 0; i--) {
          this.deleteAdditionalElement(this.expandedDivIds[i].substring(4));
        }
      }
      //calls for new books when entering a different page
      this.getData();
    },
    //data request from API
    async getData() {
      await axios
        .get(`https://api.itbook.store/1.0/search/${this.query}/${this.page}`)
        .then((resp) => {
          this.list = resp.data.books;
          this.total = resp.data.total;
        });
    },
    //request for finding books based on their unique isbn
    //if else used => so we don't have 2 requests called in network fetch/xhr
    async getBookData(event) {
      console.log("getBookData")
      let isbn13 = event.target.parentElement.id;
      if (this.expandedDivIds.includes("div_" + isbn13)) {
        this.deleteAdditionalElement(isbn13);
      } else {
        await axios
          .get(`https://api.itbook.store/1.0/books/${isbn13}`)
          .then((resp) => {
            return resp.data;
          })
          .then((resp) => {
            this.createAdditionalElement(isbn13, resp);
            console.log("emit.....getBookData", resp);
            console.log("EVENTBUS", eventBus)
            eventBus.$emit('get-resp', resp)
            eventBus._data.resp = resp;
          });
      }
    },
    //function remove element from array
    deleteAdditionalElement(id) {
      let parentElement = document.getElementById(id);
      parentElement.removeChild(document.getElementById("div_" + id));
      this.expandedDivIds.splice(this.expandedDivIds.indexOf("div_" + id), 1);
    },
    //function calls a new element into array
    createAdditionalElement(id, bookObject) {
      let element = document.getElementById(id);
      let htmlAsText = `<div id="div_${id}"><h5>Authors</h5><p>${bookObject.authors}</p>
      <h5>Publishers:</h5><p>${bookObject.publisher}</p>
      <h5>Opis</h5><p>${bookObject.desc}</p>
      <button id="info_${id}" class="button">Više o knjizi</button></div>`;
      element.insertAdjacentHTML("beforeend", htmlAsText);
      this.expandedDivIds.push("div_" + id);
      document.getElementById(`info_${id}`).addEventListener("click", function() {
        router.push("/Info");
      eventBus.$emit('get-id', id);
      });
    },
  },
};
</script>

<style scoped lang="scss">
img {
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
  color: #f56d91;
  background: #f7f5f2;
  line-height: 1.15;
  font-size: 16px;
}
#button {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: #f56d91;
  background: #f7f5f2;
  line-height: 1.15;
  font-size: 16px;
}
</style>
