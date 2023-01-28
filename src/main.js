import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { UserManager } from 'oidc-client';

import App from './App.vue'
import router from './router'

// import './assets/main.css'


const app = createApp(App)


app.use(createPinia())
app.use(router)
// use userManager oidc-client


app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
