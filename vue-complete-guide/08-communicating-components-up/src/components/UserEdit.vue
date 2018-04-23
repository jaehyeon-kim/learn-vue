<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="resetName">Edit by emit</button>
        <br>
        <button @click="resetFn()">Edit by function prop</button>
        <br>
        <button @click="editAge">Edit by event bus</button>
        <br>
        <button>Edit Gender</button>
        <br>
        <button>Edit Country</button>
        <br>
        <button>Edit Home Town</button>
        <br>
        <p>Many Details</p>
        <ul>
            <li>Name - {{ userName }}</li>
            <li>Age - {{ userAge }}</li>
            <li>Gender - {{ userGender }}</li>
            <li>Country - {{ userCountry }}</li>
            <li>HomeTown - {{ userHome }}</li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: ['userName', 'userAge', 'userGender', 'userCountry', 'userHome', 'resetFn'],
    methods: {
        resetName() {
            this.userName = 'Jaehyeon';
            this.$emit('nameWasReset', this.userName);
        },
        editAge() {
            eventBus.changeAge(Math.floor(Math.random() * 30) + 20);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
