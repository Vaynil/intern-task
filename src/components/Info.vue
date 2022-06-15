<template>
  <b-container fluid style="margin: 0 auto; background-color: #f7f5f2; width: 100%">
    <b-row style="margin-right: auto; margin-left: auto; padding-top: 15px;">
        <p style="text-align:left; padding-left: 11%; font-weight: bold;">{{resp.title}}</p>
    </b-row>
    <b-row style="margin-right: auto; margin-left: auto; padding-left: 55px; padding-right: 55px;">
      <b-col lg="4" sm="6">
        <img :src="resp.image" style="vertical-align: middle; width:300px; height:350px; background-color: #dfdfde;"/>
      </b-col>
      <b-col lg="8" sm="6" style="padding-right: 150px;">
        <table id="customers"> 
          <tr>
            <td>Rating</td>
            <td>
              <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>Authors</td>
            <td>{{resp.authors}}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{{resp.publisher}}</td>
          </tr>
          <tr>
            <td>Published</td>
            <td>{{resp.year}}</td>
          </tr>
          <tr>
            <td>Pages</td>
            <td>{{resp.pages}}</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{{resp.language}}</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>Paper book / ebook (PDF)</td>
          </tr>
          <tr>
            <td>ISBN-10</td>
            <td>{{resp.isbn10}}</td>
          </tr>
          <tr>
            <td>ISBN-13</td>
            <td>{{resp.isbn13}}</td>
          </tr>
        </table>
        <br/>
        <ul style="margin-bottom: 0; padding-left: 0; list-style: none; border-bottom: 1px solid #ecf0f1; margin-top: 0;">
          <li style="color: #2c3e50; text-align:left; margin-bottom: -1px; position: relative; display: block;">
            Description
          </li>
        </ul>
        <br/>
        <p style="text-align:left;">{{resp.desc}}</p>
      </b-col>
    </b-row>
    <hr />
    <br />
    <b-row>
      <b-col style="height: 8em; padding: 3em">
        <p>VueJS by Filip Slamar</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import { eventBus } from "@/main.js"
import { BContainer } from "bootstrap-vue";
import { BRow } from "bootstrap-vue";
import { BCol } from "bootstrap-vue";
Vue.component("b-container", BContainer);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);
export default {
  name: "Info",
  data() {
    return {
      resp: {},
      id: []
    }
  },
  created() {
    console.log("info created:::")
    console.log("EVENTBUS", eventBus)
    this.resp = eventBus._data.resp;
    eventBus.$on('get-id', id => {
      this.id = id;
      console.log(id);
    }),
    eventBus.$on('get-resp', resp => {
      console.log('Resp primljen......', resp);
      this.resp = resp;
      console.log('Novi resp', this.resp);
    })
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align:left;
  width: 50%;
}
#customers td:nth-child(even){font-weight: bold;}
#customers tr:nth-child(odd){background-color: #dfdfde;}
#customers tr:hover {background-color: #ddd;}

.rate {
    float: left;
}

.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:17px;
    color:#ccc;
}

.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}

.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}

</style>