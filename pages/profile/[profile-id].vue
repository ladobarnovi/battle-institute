<template>
    <div class="flex text-main-content">
        <section class="profile-info flex flex-col w-1/4 py-4">
            <div class="mx-auto">
                <img class="profile-picture rounded-full" src="/images/profiles/profile.png" alt="Profile picture">
                <div class="profile-summary flex flex-col">
                    <p class="text-4xl py-1 text-center">John Smith</p>
                    <p class="text-xl py-1 text-center">Firearms enthusiast</p>
                    <a class="text-xl py-1 text-center text-link-color" href="/">John Smith Portfolio</a>
                </div>
            </div>
            <hr class="divider">
            <div class="mx-auto personal-stats">
                <p class="">Courses joined: 4</p>
                <p class="">Courses completed: 1</p>
                <p class="">Currently doing: 3</p>
                <p class="">Favorite category: First aid</p>
            </div>
        </section>

    </div>
</template>

<script lang="ts">

export default {
    name: "[profile-id]",
    components: {}
}
</script>

<style scoped lang="scss">

.profile-picture {
    width: 250px;
}

.divider {
    border-top: 1px solid #E4E6EB;
    width: 400px;
    margin: 15px auto;
}

.personal-stats {
    p {
        font-size: 1.1rem;
        line-height: 1.75rem;
        margin-top: 3px;
        margin-bottom: 3px;
    }
}


</style>
