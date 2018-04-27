import Vue from 'vue'
import App from './App.vue'

// export const eventBus = new Vue({
//   methods: {
//     inc(val) {
//       this.$emit('inc', val)
//     },
//     dec(val) {
//       this.$emit('dec', val)
//     }
//   }
// })

import { store } from './store/store';

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
