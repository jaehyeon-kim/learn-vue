<template>
  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p><code>v-text, v-html, v-bind, v-on, v-if ...</code></p>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Text</strong>'"></p>
      </div>
      <hr>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p>global with <code>Vue.directive()</code></p>
        <input type="text" v-model="mycolor">
        <p>{{ mycolor }}</p>
        <p v-highlight="mycolor">Color this</p>
        <p v-highlight:background="mycolor">Color this</p>
        <p v-highlight:background.delayed="mycolor">Color this</p>
        <hr>
        <p>local directive with <code>directive property</code></p>
        <p v-local-highlight:background.delayed="mycolor">Color this</p>
        <p v-local-highlight:background.delayed.blink="mycolor">Color this</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mycolor: 'red'
    }
  },
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay); 
        }       
      }
    }
  }
}
</script>

<style>

</style>
