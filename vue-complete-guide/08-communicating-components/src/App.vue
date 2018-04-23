<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
        <div class="row">
          <br>
          <p>Parent to children</p>
          <ul>
            <li><strong>105</strong> - Pass data from <strong>parent to children</strong> by props</li>
            <li>parent: <code>:myName="name" or v-bind:myName="name"</code></li>
            <li>child: <code>props: ['myName']</code></li>
            <li><strong>106</strong> - with webpack, case sensitive works - myName works but not always, be careful</li>
            <li><strong>107</strong> - props can be used as <code>data</code> property eg) in methods.</li>
            <li>
              <strong>108</strong> - more ways to specify props
                <ul>
                  <li><code>props: ["myName"]</code></li>
                  <li><code>props: {myName: String}</code></li>
                  <li><code>props: {myName: {type: String, required: true}}</code></li>
                  <li><code>props: {myName: {type: String, default: 'Name'}}</code></li>
                  <li><code>props: {myName: {type: Object, default: function() {return {name: 'Name'}}}}</code></li>
                  <li>Note Object and Array are reference types rather than Primitive types</li>
                </ul>
            </li>
          </ul>
          <p>Children to parent</p>
          <ul>
            <li><strong>109</strong> - if changing method in child component only, value stored in parent component not updated</li>
            <li>child - <code>this.$emit('nameWasReset', this.myName);</code></li>
            <li>parent - <code>@nameWasReset="name = $event"</code></li>
            <li>Warning, however, <code>Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "myName"</code></li>
            <li><strong>110</strong> - <strong>Unidirectional data flow</strong>: parent to child or child to parent, but not child to child</li>
          </ul>
          <p>Callback as a prop - parent to child</p>
            <ul>
              <li><strong>111</strong> - send callback function as a prop to child</li>
              <li>parent - <code>:resetFn="resetName"</code></li>
              <li>child - <code>@click="resetFn()"</code></li>
              <li><strong>NO WARNING</strong></li>
            </ul>
          <p>Event bus</p>
            <ul>
              <li><strong>113</strong> - emiter and listener, child-child data flow possible</li>
              <li>same warning as above</li>
            </ul>
          <p><strong>Vuex</strong> later</p>
          <hr>
          <h3>To do</h3>
          <ul>
            <li>parent to child - prop, child to parent - callback, parent to child - callback as props, eventbus</li>
            <li>eventbus only</li>
          </ul>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';

    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
