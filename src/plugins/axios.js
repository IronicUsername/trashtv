'use strict'

import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
const config = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 60 * 1000,
  headers: {
    'cache-control': 'no-cache',
  },
};

export const httpBase = axios.create(config);

httpBase.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpBase.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
