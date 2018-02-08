import Vue from 'vue'
import App from './app.vue'
import router from './config/router.js'
import $ from 'jquery'
import axios from 'axios'
import moment from 'moment'

Vue.prototype.$ajax = axios

import './components/static/css/reset.css'
import './components/static/css/base.css'
//mint-ui 样式
import Mint from 'mint-ui';
import './components/static/css/mint-ui-style.css'
Vue.use(Mint);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
