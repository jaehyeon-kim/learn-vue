<template>
  <div class="container">
    <div class="row">
        <input v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js';

export default {
    mixins: [fruitMixin],
    created() {
        console.log('list created');
    }
}
</script>

<style>

</style>
