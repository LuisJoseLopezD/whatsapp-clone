<template>
	<div id="app">

		<div v-for="character in characters" v-bind:key="`${character.id}`" class="contact-box flex items-center space-x-8 py-4 border">

			<img class="ml-4 rounded-full object-cover w-12 h-12" :src="character.image" alt="" />

			<p class="font-bold">{{character.name}}</p>

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
</style>