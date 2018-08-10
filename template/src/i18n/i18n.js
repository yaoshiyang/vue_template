import ElementLocale from 'element-ui/lib/locale';
import LibsLocale from '@/libs/Locale';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
// import EN from './langs/en';
import zhCn from './langs/zh-CN';
import ja from './langs/ja';
import en from './langs/en';

Vue.use(VueI18n);

// http://element-cn.eleme.io/#/zh-CN/component/i18n 语言对照表

const messages = {
  'zh-CN': zhCn,
  ja,
  en
};
const { language } = localStorage;
const langs = language || window.navigator.language;

const i18n = new VueI18n({
  locale: langs === 'zh-CN' ? langs : 'ja', // set locale
  messages, // set locale messages
});

ElementLocale.i18n((key, value) => i18n.t(key, value));
LibsLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;
