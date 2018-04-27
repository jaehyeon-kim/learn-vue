<template>
  <div>
      <p>With <code>mapGetters</code>, don't need to create multiple computed props</p>
      <p>Counter from Another Result is: {{ dblCnt }}</p>
      <p>Number of Clicks: {{ strCnt }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            dblCnt: 'doubleCounter',
            strCnt: 'stringCounter'
        }),
        ownComputed() {
            console.log('own');
        }
    }
    // computed: mapGetters([
    //     'doubleCounter', 'stringCounter'
    // ])
    // computed: {
    //     counter() {
    //         return this.$store.getters.doubleCounter;
    //     },
    //     clicks() {
    //         return this.$store.getters.stringCounter;
    //     }
    // }
}
</script>

<style>

</style>