import Vue from 'vue'
import App from './App.vue'

import ServerStatusGlobal from './ServerStatusGlobal.vue'
Vue.component('app-servers-global', ServerStatusGlobal);

import LoadServerStatusLocal from './LoadServerStatusLocal.vue'
Vue.component('app-server-local', LoadServerStatusLocal)

new Vue({
  el: '#app',
  // renders a compiled JS code
  // better than template property
  render: h => h(App)
})
