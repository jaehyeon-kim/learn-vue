<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <app-quote>
                  <h2 slot="title">{{ quoteTitle }}</h2>
                  <p slot>A wonderful Quote!</p>
                </app-quote>
            </div>
        </div>
        <div class="row">
          <h3>slot</h3>
          <ul>
            <li><strong>120-1</strong> - passing contents from outside by slot</li>
            <li>eg) styling in child, everything else in parent</li>
            <li><strong>122</strong> - multiple slots can be mapped by name</li>
            <li><strong>123</strong> default slot is that without name</li>
            <li>default value can be set if not specified</li>
          </ul>
          <h3>dynamic component</h3>
          <ul>
            <li><strong>125</strong> - dynamic components with <code>component, :is</code></li>
            <li><strong>126</strong> - dynamic components are destroyed and recreated by default</li>
            <li><strong>127</strong> - not destroyed if wrapped by <code>keep-alive</code></li>
            <li><strong>128</strong> - 2 additional lifecycle hooks: <code>activated(), deactivated()</code></li>
          </ul>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                  <component :is="selectedComponent">
                    <p>Default Content</p>
                  </component>
                </keep-alive>
            </div>          
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style scoped>

</style>