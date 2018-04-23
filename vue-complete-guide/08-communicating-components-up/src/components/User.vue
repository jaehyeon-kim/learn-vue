<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <ul>
            <li>Name - {{ name }}</li>
            <li>Age - {{ age }}</li>
            <li>Gender - {{ gender }}</li>
            <li>Country - {{ country }}</li>
            <li>HomeTown - {{ home }}</li>
        </ul>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :userName="name"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Bernie',
                age: '30'
            }
        },
        methods: {
            changeName() {
                this.name = 'Jaehyeon'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        created() {
            
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
