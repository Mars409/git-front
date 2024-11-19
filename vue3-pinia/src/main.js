import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

// 引入pinia
import { createPinia} from "pinia";
//实例化pinia
const pinia = createPinia();

//使用持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(router).mount('#app')
