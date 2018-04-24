<template>
  <div>
      <h3>Quotes</h3>
      <ul>
          <li v-for="(quote, index) in propQuotes" :key="index" @click="deleteQuote(index)">{{ quote }}</li>
      </ul>
      <p>Info: Click on a Quote to delete it</p>
  </div>
</template>

<script>
export default {
    props: ['propQuotes'],
    methods: {
        deleteQuote(i) {
            this.propQuotes.splice(i, 1);
        }
    }
}
</script>

<style>

</style>