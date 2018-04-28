import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.authURL
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance;
