import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    addQuote(q) {
      this.$emit('quoteAdded', q);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
