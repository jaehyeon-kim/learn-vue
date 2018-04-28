import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://learn-vue-6c943.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance