import '@/plugins/axios'

import App from '@/App.vue'
import Vue from 'vue'

import fullscreen from 'vue-fullscreen'
import router from '@/router'

Vue.config.productionTip = false

// https://stackoverflow.com/questions/49256765/change-vue-prototype-variable-in-all-components
let globalData = new Vue({
  data: {
    $isFullscreen: false,
    $isLightscreen: false,
  }
});
Vue.mixin({
  computed: {
    $isFullscreen: {
      get: function(){ return globalData.$data.$isFullscreen },
      set: function(newState){ globalData.$data.$isFullscreen = newState; }
    },
    $isLightscreen: {
      get: function(){ return globalData.$data.$isLightscreen },
      set: function(newState){ globalData.$data.$isLightscreen = newState; }
    },
  }
})

Vue.use(fullscreen)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
