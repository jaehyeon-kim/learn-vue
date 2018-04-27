<template>
  <div>
      <button class="btn btn-primary" @click="inc">Increase</button>
      <button class="btn btn-primary" @click="dec">Decrease</button>
      <p>Counter from Counter is: {{ $store.state.counter }}</p>
  </div>
</template>

<script>
// import { eventBus } from '../main';

export default {
    // data() {
    //     return {
    //         counter: 0
    //     }
    // },
    methods: {
        inc() {
            // this.counter++;
            // eventBus.inc(this.counter);
            this.$store.state.counter++;
        },
        dec() {
            // this.counter--;
            // eventBus.inc(this.counter);
            this.$store.state.counter--;
        }
    }
}
</script>

<style>

</style>