<template>
  <div>
      <!-- <p>Counter from Result is: {{ appCounter }}</p> -->
      <p>Counter from Result is: {{ counter }}</p>
  </div>
</template>

<script>
export default {
    // props: ['appCounter']
    computed: {
        counter() {
            return this.$store.getters.doubleCounter;
        }
    }
}
</script>

<style>

</style>