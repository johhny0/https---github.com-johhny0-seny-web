import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AppVue from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faHouse, faPaw, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(faPaw, faGraduationCap, faHouse, faUser, faFacebookF, faTwitter, faGoogle)

import axios from 'axios';

// Configuração global do Axios (opcional)
axios.defaults.baseURL = 'localhost:3000';  // URL base da sua API
//axios.defaults.headers.common['Authorization'] = 'Bearer your-token';

const app = createApp(AppVue)
app.config.globalProperties.$axios = axios;

app.use(createPinia())
app.use(router)

app.mount('#app')
