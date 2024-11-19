// import { createApp } from 'vue'
// // import './style.css'
// import App from './App.vue'


// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 ElementPlus 的样式文件

const app = createApp(App);

app.use(ElementPlus); // 安装 ElementPlus 插件

app.mount('#app');