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
                    :userAge="age"
                    :userGender="gender"
                    :userCountry="country"
                    :userHome="home"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userName="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age"
                    :userGender="gender"
                    :userCountry="country"
                    :userHome="home"
                    ></app-user-edit>
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
                age: '30',
                gender: 'Male',
                country: 'aus',
                home: 'kor'
            }
        },
        methods: {
            changeName() {
                this.name = 'Jaehyeon'
            },
            resetName() {
                this.name = 'Jaehyeon Kim'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.age = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
