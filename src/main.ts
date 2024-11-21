import { createApp } from 'vue'
import './styles/common.css'
import './tailwind.css'
import App from './App.vue'
import VueFullpage from 'vue-fullpage.js';
createApp(App).use(VueFullpage).mount('#app')
