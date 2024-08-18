import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from "@/pages/Header.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



const app = createApp(App)

// 全局注册组件
app.component('Header', Header)
app.use(ElementPlus)

app.use(store).use(router).mount('#app')
