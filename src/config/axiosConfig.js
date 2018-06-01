import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8085/server';
// axios.defaults.baseURL = 'http://47.98.117.109';//公网地址
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;