<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <!-- <app-result :appCounter="counter"></app-result> -->
        <app-result></app-result>
        <hr>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <hr>
        <app-another-counter></app-another-counter>
        <hr>
        <app-yet-another-counter></app-yet-another-counter>
        <hr>
        <p>two way binding</p>
        <p><code>v-model</code> doesn't work as it jsut gets value</p>
        <input type="text" :value="value" @input="updateValue">
        <hr>
        <input type="text" v-model="valueMore">
        <p>Value is {{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { eventBus } from './main';

import Counter from './components/Counter.vue';
import Result from './components/Result.vue';
import AnotherResult from './components/AnotherResult.vue';
import AnotherCounter from './components/AnotherCounter.vue';
import YetAnotherCounter from './components/YetAnotherCounter.vue';

export default {
  // data() {
  //   return {
  //     counter: 0
  //   }
  // },
  computed: {
    value() {
      return this.$store.state.value;
    },
    valueMore: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        return this.$store.dispatch('updateValue', value);
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter,
    appYetAnotherCounter: YetAnotherCounter
  },
  created() {
    // eventBus.$on('inc', (data) => {
    //   this.counter = data;
    // });

    // eventBus.$on('dec', (data) => {
    //   this.counter = data;
    // })
  }
}
</script>

<style>

</style>
