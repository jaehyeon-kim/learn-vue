<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <!-- <router-link v-for="(id, index) in numUsers" :key="index" :to="{ name: 'userStart', params: { id: $route.params.id } }" tag="li" class="list-group-item" style="cursor: pointer">User {{ id }}</router-link> -->
            <router-link v-for="(id, index) in numUsers" :key="index" :to="'/user/' + id" tag="li" class="list-group-item" style="cursor: pointer">User {{ id }}</router-link>
            <!-- <router-link to="/user/1" tag="li" class="list-group-item" style="cursor: pointer">User 1</router-link>
            <router-link to="/user/2" tag="li" class="list-group-item" style="cursor: pointer">User 2</router-link>
            <router-link to="/user/3" tag="li" class="list-group-item" style="cursor: pointer">User 3</router-link> -->
        </ul>
    </div>
</template>

<script>
export default {
  data() {
      return {
          numUsers: 3
      }
  }
}
</script>
