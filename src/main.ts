import './assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faHouse, faPaw, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(faPaw, faGraduationCap, faHouse, faUser, faFacebookF, faTwitter, faGoogle)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
