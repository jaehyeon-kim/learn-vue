import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    gender: 'Male',
    country: 'AUS',
    home: 'KOR'
  },
  methods: {

  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
