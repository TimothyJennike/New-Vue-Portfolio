import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/css/styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(router).use(AOS.init()).mount('#app')
