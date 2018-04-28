import axios from 'axios';
import config from '../config';

const instance = axios.create({
    baseURL: config.databaseURL
});

// instance.defaults.headers.common['Authorization'] = 'fasfdsa'
instance.defaults.headers.get['Accepts'] = 'application/json'

// const reqInterceptor = axios.interceptors.request.use(config => {
//   console.log('Request Interceptor', config)
//   return config
// })
// const resInterceptor = axios.interceptors.response.use(res => {
//   console.log('Response Interceptor', res)
//   return res
// })

// axios.interceptors.request.eject(reqInterceptor)
// axios.interceptors.response.eject(resInterceptor)

export default instance;