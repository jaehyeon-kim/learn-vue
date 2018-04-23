<template>
    <div>
        <app-server v-for="server in 3" :key="server"></app-server>
    </div>
</template>

<script>
import ServerStatusLocal from './ServerStatusLocal.vue';
export default {
    components: {
        'app-server': ServerStatusLocal
    }
}
</script>
