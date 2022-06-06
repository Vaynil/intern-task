<template>
  <b-container fluid class="bv-example-row" style="margin: 0 auto; background-color: #f7f5f2; width: 100%">
    <b-row style="margin-right: auto; margin-left: auto; padding-left: 15px; padding-right: 15px; padding-top: 15px;">
        <p style="text-align:left">Naslov knjige</p>
    </b-row>
    <b-row style="margin-right: auto; margin-left: auto; padding-left: 15px; padding-right: 15px;">
      <b-col cols-sm="4" cols-md="4" cols-lg="2" style="background-color: #dfdfde; height:300px; width: 300px;">
        <img src="../assets/book.png" style="width: 300px;
    height: 250px;
    margin-top: 20px;"/>
      </b-col>
      <b-col cols-sm="8" cols-md="8" cols-lg="10">
        <table id="customers" v-for="item in resp" v-bind:key="item.id">
          <tr>
            <td>Rating</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>Authors</td>
            <td>{{item.authors}}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>Francisco Chang</td>
          </tr>
          <tr>
            <td>Published</td>
            <td>Roland Mendel</td>
          </tr>
          <tr>
            <td>Pages</td>
            <td>Roland Mendel</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>Roland Mendel</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>Roland Mendel</td>
          </tr>
          <tr>
            <td>ISBN-10</td>
            <td>Roland Mendel</td>
          </tr>
          <tr>
            <td>ISBN-13</td>
            <td>Roland Mendel</td>
          </tr>
        </table>
        <br/>
        <ul style="margin-bottom: 0; padding-left: 0; list-style: none; border-bottom: 1px solid #ecf0f1; margin-top: 0;">
          <li style="color: #2c3e50; text-align:left; margin-bottom: -1px; position: relative; display: block;">
            Description
          </li>
        </ul>
        <br/>
        <p style="text-align:left;">An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. 
          A DevOps teams highest priority is understanding those risks and hardening the system against them.
          Securing DevOps teaches you the essential techniques to secure your c...</p>
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
import { eventBus } from "@/main.js"
export default {
  name: "Info",
  data() {
    return {
      resp: [
        {authors: "Hello"}
      ],
      id: []
    }
  },
  created() {
    eventBus.$on('get-id', id => {
      console.log(id);
    }),
    eventBus.$on('get-resp', resp => {
      console.log(resp);
    })
  }
}
</script>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#customers td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align:left;
}
#customers tr:nth-child(odd){background-color: #dfdfde;}
#customers tr:hover {background-color: #ddd;}

</style>