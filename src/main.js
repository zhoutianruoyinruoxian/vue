import Vue from 'vue';
import $ from 'jquery';
import moment from 'moment';
//mint-ui 样式
import Mint from 'mint-ui';
import App from './app.vue';
import router from './config/router.js';
import axios from './config/axiosConfig';

import './components/static/css/reset.css';
import './components/static/css/base.css';
import './components/static/css/mint-ui-style.css';
Vue.use(Mint);
Vue.prototype.$ajax = axios;



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
