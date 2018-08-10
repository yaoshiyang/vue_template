{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

import Vue from 'vue';
import App from './App';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import _ from 'lodash';
import i18n from '@/i18n/i18n';
import axios from '@/libs/utils/http';
import store from '@/store';

import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.use(ElementUI.Loading.directive);

// 定义全局饿了么插件
Vue.prototype.$loading = ElementUI.Loading.service;
Vue.prototype.$msgbox = ElementUI.MessageBox;
Vue.prototype.$alert = ElementUI.MessageBox.alert;
Vue.prototype.$confirm = ElementUI.MessageBox.confirm;
Vue.prototype.$prompt = ElementUI.MessageBox.prompt;
Vue.prototype.$notify = ElementUI.Notification;
Vue.prototype.$message = ElementUI.Message;

/*  定义工具 */
Vue.prototype.$http = axios;
Vue.prototype._ = _;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
