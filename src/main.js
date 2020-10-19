import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import VueRouter from 'vue-router'; //import the routes

import calls from './components/calls.vue';
import chats from './components/chats.vue';
import contacts from './components/contacts.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/chats' },
    { path: '/chats', name: 'chats', component: chats },
    { path: '/calls', name: 'calls', component: calls },
    { path: '/contacts', name: 'contacts', component: contacts }
];

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
    router, // don't forget
    render: h => h(App),
}).$mount('#app')