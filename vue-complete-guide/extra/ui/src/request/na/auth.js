import instance from './common';

instance.defaults.headers.common['Authorization'] = 'abcdefg';

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