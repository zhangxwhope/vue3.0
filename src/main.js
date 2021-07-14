import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

// 1、创建一个Vue实例
const app = createApp(App);
app.use(store).use(router).use(i18n)
  .mount('#app');

// // 2、创建一个renderer
// const renderer = require('vue-server-renderer').createRenderer();

// // 3、将Vue实例渲染为HTML
// renderer.renderToString(app, (err, html) => {
//   if (err) throw err;
//   console.log('html', html);
// });
