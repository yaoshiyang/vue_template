import Vue from 'vue';
import Vuex from 'vuex';
// 修改state时在console打印
import createLogger from 'vuex/dist/logger';

import common from './common';
import dict from './dict';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    common,
    dict,
  },
  // 严格模式，非法修改state时报错
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
