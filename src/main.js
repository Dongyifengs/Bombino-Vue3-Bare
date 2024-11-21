import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 全局配置（根据需要调整）
app.config.globalProperties.$productionTip = false;
app.config.globalProperties.$devtools = false;

// 挂载应用
app.mount('#app');
