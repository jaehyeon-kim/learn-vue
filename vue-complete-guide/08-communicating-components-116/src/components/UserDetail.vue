<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Name: {{ userAge }}</p>
        <button @click="resetName">resetName</button>
        <button @click="resetFn()">resetFn</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            myName: {
                type: String,
                required: true
            },
            resetFn: Function,
            userAge: Number
        },
        //props: ['myName'],
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                this.myName = 'Bernie';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
