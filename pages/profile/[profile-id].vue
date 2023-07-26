<template>
    <div class="flex text-main-content gap-4">
        <section
            class="profile-info flex flex-col w-1/4 py-4 bg-base-color-comp border-r border-t border-main-content/10 min-h-[calc(100vh-64px)]">
            <div class="mx-auto my-8">
                <img class="profile-picture rounded-full" src="/images/profiles/profile.png" alt="Profile picture">
                <div class="profile-summary flex flex-col text-center">
                    <p class="text-4xl py-1">John Smith</p>
                    <p class="text-xl py-1">Firearm enthusiast</p>
                    <a class="text-xl py-1 text-link-color" href="/">John Smith Portfolio</a>
                </div>
            </div>
            <hr class="divider">
            <div class="mx-auto personal-stats text-center">
                <p class="">Courses joined: 4</p>
                <p class="">Courses completed: 1</p>
                <p class="">Currently doing: 3</p>
                <p class="">Favorite category: First aid</p>
            </div>
        </section>

        <section class="profile-content flex flex-col w-3/4 gap-4">
            <div class="mx-28">
                <div class="profile-courses">
                    <h2 class="text-3xl font-bold py-4 mt-8">Courses</h2>
                    <nav class="class-nav">
                        <ul>
                            <li>
                                <a href="">Currently Enrolled</a>
                                <a href="">Purchased Courses</a>
                                <a href="">Wishlist</a>
                                <a href="">Reviews</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="course-display flex gap-4 my-8">
                        <div v-for="course in currentCourses">
                            <NuxtLink to="/course/1">
                                <img class="course-tn" :src="course.img">
                                <div class="flex flex-col mt-2">
                                    <p class="text-2xl font-bold">{{ course.title }}</p>
                                    <p class="text-xl">{{ course.author }}</p>
                                    <p class="">{{ course.duration }}</p>
                                </div>

                            </NuxtLink>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
</template>

<script lang="ts">

export default {
    name: "[profile-id]",
    components: {},
    setup() {
        const currentCourses = [
            {
                img: "/images/thumbnails/tn1.png",
                title: "First aid essentials",
                author: "Jonathan Winters",
                duration: "3h 20m"
            },
            {
                img: "/images/thumbnails/tn2.png",
                title: "Close quarter combat",
                author: "Ethan Starynski",
                duration: "1h 45m"
            },
            {
                img: "/images/thumbnails/tn3.png",
                title: "Underwater fundamentals",
                author: "Nick Gonzalez",
                duration: "6h 12m"
            },

        ]

        return {
            currentCourses
        }

    }
}

// TODO: Change the list of currentCourses to purchasedCourses etc on click
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

.class-nav {
    ul {
        li {
            a {
                margin: 25px;
                font-weight: 700;
                letter-spacing: 1px;
            }
        }
    }
}

.course-tn {
    width: 350px
}


</style>
