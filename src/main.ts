import { createApp } from 'vue'
import { createPinia } from 'pinia' //引入pinia
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';

const app = createApp(App);
import 'element-plus/dist/index.css'

app.use(router).use(ElementPlus).use(createPinia()).mount('#app')
