<template>
    <div id="app" class="w-full wa-body">

        <!-- HEADER -->
        <div class="header flex justify-between">
            <p class="font-semibold p-4 text-xl text-white">WhatsApp</p>
            <div class="flex place-items-center text-white mr-4">
                <i class="p-2 fas fa-search"></i>
                <i class="p-2 far fa-comment-dots"></i>
                <i class="p-2 fas fa-ellipsis-v"></i>
            </div>
        </div>

        <!-- MENU -->
        <ul class="header menu flex items-center justify-between font-semibold py-0">

            <router-link to="/calls" active-class="active" title="calls"><li class="w-1/3 px-10 p-2 cursor-pointer">CALLS</li></router-link>

            <router-link to="/chats" active-class="active" title="chats"><li class="w-1/3 px-8 p-2 cursor-pointer">CHATS</li></router-link>

            <router-link to="contacts" active-class="active" title="contacts"><li class="w-1/3 cursor-pointer px-8 p-2">CONTACTS</li></router-link>

        </ul>

        <!-- CONTACT BOX -->
        <router-view></router-view>

    </div>
</template>

<script>

// import chats from './components/chats.vue';
// import calls from './components/calls.vue';

export default {
    
    name: 'App',

    // components: {
    //     chats,
    //     calls
    // }
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

.wa-body .menu li {
    color: white;
}

.wa-body .menu .active {
    opacity: 1;
    border-bottom: 4px solid white;
}

.wa-body .menu a:not(.active) {
  opacity: 0.5;
}

</style>