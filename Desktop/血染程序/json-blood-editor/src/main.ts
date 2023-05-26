import { createApp } from 'vue'
import { createPinia } from 'pinia' //引入pinia
import App from './App.vue'
import router from './router'
import clipBoard from 'clipboard'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).use(createPinia()).mount('#app')
