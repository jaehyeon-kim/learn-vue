<template>
    <div>
        <h3>Some User Details</h3>
        <button @click="navigateToUser" class="btn btn-primary">Go to User</button>
        <p>User loaded has Id: {{ $route.params.id }}</p>
        <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
        <!-- <router-link tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }" class="btn btn-primary">Edit User</router-link> -->
        <!-- <router-link tag="button" :to="'/user/ + $route.params.id + /edit'" class="btn btn-primary">Edit User</router-link> -->
    </div>
</template>

<script>
export default {
  data() {
      return {
          link: {
              name: 'userEdit',
              params: {id: this.$route.params.id},
              query: { locale: 'en', q: 100 },
              hash: '#data'
          }
      }
  },
  beforeRouteEnter(to, from, next) {
      // here no access to component data as not yet created!!
    //   next(vm => {
    //       vm.link;
    //   });
      if (true) { // eg check authenticated!!
          next();
      } else {
          next(false);
      }

  },
  methods: {
      navigateToUser() {
          this.$router.push({path: '/user'});
      }
  }
}
</script>
