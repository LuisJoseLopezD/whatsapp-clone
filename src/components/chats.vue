<template>

  <div id="app">

    <!-- CONTACT BOX -->

    <div v-for="rlt in result" v-bind:key="`${rlt.id}`" class="contact-box flex justify-between py-4 border">

        <img class="ml-4 rounded-full" src="https://pbs.twimg.com/profile_images/1309223687086841856/m4D7wSLy_400x400.jpg" alt="" />
        
        <div class="flex-column w-1/3 mr-24">
            <p class="font-bold">{{rlt.username}}</p>
            <p class="text-gray-600">{{rlt.website}}</p>
        </div>

        <p class="green-time font-semibold px-2 mr-2">{{rlt.id}}</p>

    </div>

  </div>

</template>

<script>

import axios from "axios";

export default {

    name: 'App',

    // data(){
    // return {
    // users: [ 
    //   {icon: 'https://pbs.twimg.com/profile_images/1311690208509747200/KngeU1O9_400x400.jpg', name: 'Dog', message: 'guau guau guau', time: '10:40 AM'},
    //   {icon: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg', name: 'Cat', message: 'miau miau', time: '5:00 AM'},
    //   {icon: 'https://pbs.twimg.com/profile_images/467502291415617536/SP8_ylk9_400x400.png', name: 'Duck', message: 'duck duck go', time: '8:17 AM'}
    //     ],
    //   }
    // },

      data () {
      return {
        result:[]
            }
        },

    async created() {
      let response = await axios.get("https://jsonplaceholder.typicode.com/users");
      this.result = response.data;
      console.log(response.data);
    }

}

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