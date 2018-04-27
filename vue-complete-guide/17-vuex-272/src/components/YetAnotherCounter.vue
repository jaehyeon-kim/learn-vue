<template>
  <div>
      <button class="btn btn-primary" @click="inc">Increase</button>
      <button class="btn btn-primary" @click="dec">Decrease</button>
      <p>Counter using mutations is: {{ $store.state.counter }}</p>
      <hr>
      <button class="btn btn-primary" @click="incMore(payload)">Increase More</button>
      <button class="btn btn-primary" @click="decMore(delta)">Decrease More</button>
      <p>Counter using async actions is: {{ $store.state.counter }}</p>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    data() {
        return {
            payload: {
                delta: 10,
                duration: 2000
            },
            delta: 10
        }
    },
    methods: {
        ...mapActions({
            incMore: 'asyncIncrement',
            decMore: 'asyncDecrement'
        }),
        ...mapMutations({
            inc: 'increment',
            dec: 'decrement'
        })
    }
    // methods: {
    //     ...mapMutations({
    //         inc: 'increment',
    //         dec: 'decrement'
    //     })
    // }
    // methods: {
    //     inc() {
    //         this.$store.commit('increment');
    //     },
    //     dec() {
    //         this.$store.commit('decrement');
    //     }
    // }
}
</script>

<style>

</style>