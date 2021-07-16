import { createSSRApp } from 'vue';
import createRouter from './router';
import createStore from './store';
import createI18n from './i18n';
import App from './App.vue';

// 导出一个创建根组件的工厂函数
export default function () {
  const app = createSSRApp(App);
  const router = createRouter();
  const store = createStore();
  const i18n = createI18n();

  app.use(router).use(store).use(i18n);

  return {
    app,
    router,
  };
}
