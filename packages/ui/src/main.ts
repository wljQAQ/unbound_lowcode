import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:uno.css';
import './assets/style/index.css';

import router from './router';

const app = createApp(App);

app.use(router).mount('#app');

export default app;
