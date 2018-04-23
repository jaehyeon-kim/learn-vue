<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
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
export default {
    props: ['userName']
}

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
