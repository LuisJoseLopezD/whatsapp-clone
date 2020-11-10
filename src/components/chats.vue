<template>

  <div id="app">

    <!-- CONTACT BOX -->

    <div v-for="character of characters" v-bind:key="character.id" class="contact-box flex justify-between py-4 border">

        <img class="ml-4 rounded-full" :src="character.image" alt="" />
        
        <div class="flex-column w-1/3 mr-24">
            <p class="font-bold">{{character.name}}</p>
            <p class="text-gray-600">{{character.status}}</p>
        </div>

        <p class="green-time font-semibold px-2 mr-2">{{character.id}}</p>

    </div>

  </div>

</template>

<script>

/* eslint-disable no-unused-vars */

import axios from "axios";

export default {

    name: 'App',

    data: function(){
      return{
        characters: []
      };
    },

      mounted(){
        let result = axios
        .get("https://rickandmortyapi.com/api/character")
        .then(res => {
          this.characters = res.data.results;
          console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        });
      }
  };

</script>

<style scoped>

.wa-body .contact-box .green-time {
    color: #25D366;
}

img {
  width: 58px;
  height: 58px;
}

</style>