import { createI18n } from 'vue-i18n';
import zh from './lang/zh';
import en from './lang/en';

const messages = {
  zh,
  en,
};

export default createI18n({
  locale: 'zh',
  messages,
});
