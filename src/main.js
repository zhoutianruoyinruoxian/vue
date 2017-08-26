import Vue from 'vue'
import App from './app.vue'
import router from './config/router.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
