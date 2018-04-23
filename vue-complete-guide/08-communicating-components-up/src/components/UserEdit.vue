<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button>Edit Name</button>
        <p>{{ userName }}</p>
        <br>
        <button>Edit Age</button>
        <br>
        <button>Edit Gender</button>
        <br>
        <button>Edit Country</button>
        <br>
        <button>Edit Home Town</button>
    </div>
</template>

<script>
export default {
    data: []
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
