import './assets/style/style.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import home from './pages/home.vue'
import about from './pages/about.vue'

const pagerouts = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: home
        },
        {
            path: '/about',
            name: "about",
            component: about
        }
    ]
});

const app = createApp(App);


app.use(pagerouts);


app.mount('#app')