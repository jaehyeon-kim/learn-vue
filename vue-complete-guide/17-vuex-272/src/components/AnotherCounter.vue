<template>
  <div>
      <p>With <code>mapMutations</code>, don't need to create multiple methods to commit</p>
      <p>Note that <code>mutations</code> are executed synchronously</p>
      <p><code>Actions</code> can be helpful - committing is done only if (asynchronous) actions are completed</p>
      <p>for sync tasks, however, <code>Mutations</code> can still be used</p>
      <button class="btn btn-primary" @click="inc">Increase</button>
      <button class="btn btn-primary" @click="dec">Decrease</button>
      <p>Counter from Another Counter is: {{ $store.state.counter }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            inc: 'increment',
            dec: 'decrement'
        })
    }
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