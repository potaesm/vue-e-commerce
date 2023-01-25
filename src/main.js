import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './Store/index';
import chart from 'chart.js/auto';
import chartkick from 'vue-chartkick';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(chartkick.use(chart));
app.config.globalProperties.$filters = {
  MaxName(value) {
    if (value.lenght > 8) return value;
    return value.substr(0, 8) + '..';
  },
  capitalize(value) {
    if (value.lenght > 8) return value;
    return value.substr(0, 8) + '..';
  }
};
app.mount('#app');
