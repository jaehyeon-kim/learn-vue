<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>filter</h1>
        <p>both global and local</p>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <p>alternative to filter</p>
        <p>using <code>computed</code> is more efficient</p>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <p><strong>data</strong> is not shared across different mixins, only a fresh copy is passed at init</p>
        <p>for sharing, (1) eventBus (2) JS object, not mixin (3) Veux</p>
        <input v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>mixin</h1>
        <p>mixin's data, properties are merged</p>
        <p>lifecycle hook - mixin first</p>
        <app-list></app-list>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>mixin - global by <code>Vue.mixin()</code></h1>
        <p>mixin order - global mixin, local mixin, instance</p>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin.js'

export default {
  data() {
    return {
      text: 'Hello there!',
      // fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      // filterText: ''
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    // filteredFruits() {
    //   return this.fruits.filter((element) => {
    //     return element.match(this.filterText);
    //   });
    // }
  },
  components: {
    appList: List
  },
  mixins: [fruitMixin],
  created() {
    console.log('app created');
  }
}
</script>

<style>

</style>
