import { createApp } from 'vue';
import App from './app.vue';
import viewUI from '../dist/es/index';

const app = createApp(App);

app.use(viewUI);

app.mount('#app');
