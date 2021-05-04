import App from '@/App.vue'
import Vue from 'vue'

import fullscreen from 'vue-fullscreen'
import {httpBase} from '@/plugins/axios'
import router from '@/router'

Vue.prototype.$api = httpBase
Vue.config.productionTip = false

Vue.use(fullscreen)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
