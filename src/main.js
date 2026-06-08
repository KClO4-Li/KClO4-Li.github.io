import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import './assets/styles/global.css'
import './assets/styles/animation.css'

createApp(App).use(router).mount('#app')