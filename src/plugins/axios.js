'use strict';

import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
const config = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'cache-control': 'no-cache',
  },
  timeout: 120000// Timeout
};

const _axios = axios.create(config);

Plugin.install = function(Vue, options){
  options
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get(){
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
