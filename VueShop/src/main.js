import './assets/style/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import "aos/dist/aos.css";


import { createRouter, createWebHistory } from 'vue-router'
import home from './pages/home.vue'
import about from './pages/about.vue'
import products from './pages/products.vue'
import product from './pages/product.vue'

const pagerouts = createRouter({
    history: createWebHistory(),
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
        },
        {
            path: '/products',
            name: "products",
            component: products
        },
        {
            path: '/products/:id',
            name: "product",
            component: product
        },
    ]
});

const app = createApp(App);


app.use(pagerouts);


app.mount('#app')