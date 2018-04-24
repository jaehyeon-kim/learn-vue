<template>
  <div>
      <textarea v-model="msg" cols="50" rows="4"></textarea>
      <p>{{ msg }}</p>
      <br>
      <button @click="addQuote">Add Quote</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    data: function() {
        return {
            msg: ''
        }
    },
    methods: {
        addQuote() {
            eventBus.addQuote(this.msg);
            this.msg = '';
        }
    }
}
</script>

<style>

</style>