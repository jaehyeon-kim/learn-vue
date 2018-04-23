<template>
  <div>
    <p>Data should be a function that returns an object, not an object by itself, if not,</p>
    <ul><li><code>The "data" option should be a function that returns a per-instance value in component definitions.</code></li></ul>
    <hr>
    <p>From App.vue</p>
    <p>Server Status: {{ status }}</p>
    <hr>
    <p>From ServerStatusGlobal.vue</p>
    <p>- as a global component - imported directly from main.js</p>
    <app-servers-global></app-servers-global>
    <hr>
    <p>From LoadServerStatusLocal.vue and ServerStatusLocal.vue</p>
    <p>- as a local component - imported from Home.js / LoadServerStatusLocal is global component</p>
    <app-server-local></app-server-local>
  </div>
  
</template>

<script>
export default {
  data: function() {
    return {
      status: 'Critical'
    }
  }
}
</script>

<style>
</style>
