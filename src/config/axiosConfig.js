import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8085/server';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;