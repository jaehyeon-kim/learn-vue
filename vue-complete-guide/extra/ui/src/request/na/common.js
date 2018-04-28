import axios from 'axios'
import config from './config';

const instance = axios.create({
    baseURL: config.baseURL
});

instance.defaults.headers.get['Accepts'] = 'application/json';

// const reqInterceptor = instance.interceptors.request.use(config => {
//     console.log('axios.interceptors.request.use => config');
//     console.log(config);
//     config.headers['INTERCEPTED'] = 'VALUE';
//     return config;
// });

// const resInterceptor = instance.interceptors.response.use(res => {
//     console.log('axios.interceptors.response.use => res');
//     console.log(res);
//     return res;
// });

// instance.interceptors.request.eject(reqInterceptor);
// instance.interceptors.response.eject(resInterceptor);

export default instance;