import '@/assets/scss/main.scss'

import App from '@/App.vue'
import Vue from 'vue'
import {httpBase} from '@/plugins/axios'
import router from '@/router'

Vue.prototype.$api = httpBase
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
