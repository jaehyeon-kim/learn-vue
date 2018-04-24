<template>
  <div class="container">
    <div class="row">
      <app-header
          :propQuotes="quotes"
          ></app-header>
    </div>
    <div class="row">
      <app-new-quote
        
          ></app-new-quote>
    </div>
    <div class="row">
      <app-quote-grid
          :propQuotes="quotes"
          ></app-quote-grid>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js';

import Header from './components/Header.vue';
import NewQuote from './components/NewQuote.vue';
import QuoteGrid from './components/QuoteGrid.vue';

export default {
  data() {
    return {
      quotes: []
    }
  },
  components: {
    appHeader: Header,
    appNewQuote: NewQuote,
    appQuoteGrid: QuoteGrid
  },
  created() {
    eventBus.$on('quoteAdded', (data) => {
      if (data.length > 0) {
        if (this.quotes.length < 3) {
          this.quotes.push(data);
        } else {
          alert('too many quotes');
        }
      }
    });
  }
}
</script>

<style>

</style>
