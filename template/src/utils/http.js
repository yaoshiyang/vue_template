import {
  Message,
} from 'element-ui';
import axios from 'axios';
import Promise from 'es6-promise';
import i18n from '@/i18n/i18n';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '';

axios.interceptors.request.use(
  (config) => {
    const newConfig = config;
    newConfig.data = JSON.stringify(config.data);
    newConfig.headers = {
      'Content-Type': 'application/json',
      'Accept-Language': window.g.language,
    };
    return newConfig;
  },
  (error) => {
    if (error.response) {
      Message({
        type: 'error',
        message: i18n.t('L.key210'),
      });
    }
    Promise.reject(error);
  },
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    // 以防后期要加用户登录
    // if (response.data.code === 2) {
    //     router.push({
    //         path: '/login',
    //     });
    // }
    // if (response.data.code !== 0 && response.data.code !== 2) {
    //     Message({
    //         message: response.data.msg,
    //         type: 'error',
    //         duration: 2 * 1000,
    //     });
    // }
    // const res = response;
    // // 统一处理页码返回0的问题
    // if (res.data.data && res.data.data.currentPage === 0) {
    //     res.data.data.currentPage = 1;
    // }
    // return res.data;
    if (response.status !== 200) {
      Message({
        type: 'error',
        message: i18n.t('L.key210'),
      });
      return false;
    }
    return response.data;
  },
  error => Promise.reject(error),

);

export default axios;
