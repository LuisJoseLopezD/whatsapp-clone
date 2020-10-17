<template>

    <div id="app" class="w-full wa-body">

        <!-- HEADER -->

        <div class="header flex justify-between">
            <p class="font-semibold p-4 chat-color text-xl text-white">WhatsApp</p>
            <div class="flex place-items-center text-white mr-4">
                <i class="p-2 fas fa-search"></i>
                <i class="p-2 far fa-comment-dots"></i>
                <i class="p-2 fas fa-ellipsis-v"></i>
            </div>
        </div>

        <div class="header flex items-center justify-around px-4 font-semibold text-white py-0">
            <p class="opacity-50">CALLS</p>
            <p class="border-b-4 px-8 p-2 chat-color">CHATS</p>
            <p class="opacity-50">CONTACTS</p>
        </div>

        <!-- CONTACT BOX -->

        <div v-for="user in users" v-bind:key="`${user.user}`" class="contact-box flex justify-between py-4 border">

            <img class="rounded-full ml-4" width="58px" :src="`${user.icon}`" alt="" />
            
            <div class="flex-column w-1/3 mr-16">
                <p class="font-bold">{{user.name}}</p>
                <p class="text-gray-600">{{user.message}}</p>
            </div>

            <p class="green-time font-semibold px-2 mr-2">{{user.time}}</p>

        </div>
    
    </div>

</template>

<script>

export default {

    name: 'App',

    data(){
    return {
    users: [ 
      {icon: 'https://pbs.twimg.com/profile_images/1311690208509747200/KngeU1O9_400x400.jpg', name: 'Dog', message: 'guau guau guau', time: '10:40 AM'},
      {icon: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg', name: 'Cat', message: 'miau miau', time: '5:00 AM'},
      {icon: 'https://pbs.twimg.com/profile_images/467502291415617536/SP8_ylk9_400x400.png', name: 'Duck', message: 'duck duck go', time: '8:17 AM'}
        ],
      }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.wa-body {
    font-family: 'Roboto', sans-serif;
}

.header {
    background: #075E54;
}

.wa-body .header .chat-color {
    color: #edf6f6;
}

.wa-body .contact-box .green-time {
    color: #25D366;
}

</style>