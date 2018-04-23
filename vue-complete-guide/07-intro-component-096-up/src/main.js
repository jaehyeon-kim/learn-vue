import Vue from 'vue'
import App from './App.vue'

// global component
import ServerStatus from './ServerStatus.vue'
Vue.component('server-status-global', ServerStatus);

// local component
import Home from './Home.vue'
Vue.component('Home', Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
