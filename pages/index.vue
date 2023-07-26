<template>
    <div id="home">
        <div class="">
            <section class="slider-container bg-base-color-comp">
                <div class="rounded-xl overflow-hidden">
                    <Swiper :loop="true">
                        <SwiperSlide v-for="banner in banners">
                            <div class="slide-wrapper relative">
                                <img :src="banner.url" alt="">
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section class="h-[70vh] py-8">
                <div class="w-[85vw] mx-auto h-full flex flex-col">
                    <h2 class="text-main-content text-4xl mb-4">Featured Courses</h2>
                    <div class="grid grid-rows-2 grid-flow-col gap-4 grow">
                        <NuxtLink to="/course/1"
                                  class="row-span-2 col-span-2 thumbnail thumbnail-1 rounded-2xl"></NuxtLink>
                        <NuxtLink to="/course/1"
                                  class="col-span-1 bg-white thumbnail thumbnail-2 rounded-2xl"></NuxtLink>
                        <NuxtLink to="/course/1"
                                  class="col-span-1 bg-black thumbnail thumbnail-3 rounded-2xl"></NuxtLink>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: "index",
    setup() {
        const banners = [
            {
                url: '/images/banners/b1.png'
            },
            {
                url: '/images/banners/b2.png'
            },
            {
                url: '/images/banners/b3.png'
            },
            {
                url: '/images/banners/b4.png'
            },
            {
                url: '/images/banners/b5.png'
            },
            {
                url: '/images/banners/b6.png'
            },
            {
                url: '/images/banners/b7.png'
            },
            {
                url: '/images/banners/b8.png'
            },
            {
                url: '/images/banners/b9.png'
            },
            {
                url: '/images/banners/b10.png'
            },
            {
                url: '/images/banners/b11.png'
            }
        ]

        return {
            banners
        }
    }
}
</script>

<style scoped lang="scss">
.slide-wrapper {
    img {
        width: 100%;
        height: 80vh;
        object-fit: contain;
        object-position: center;
        margin: 0 auto;
    }

    p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 16px 32px;
    }
}

.featured-courses, .popular-courses {
    .course {
        position: relative;
        flex-grow: 1;

        .course-wrapper {
            padding-top: 50%;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-position: center;
                object-fit: cover;
            }
        }
    }
}

.thumbnail {
    background-size: cover;
    background-position: bottom;
}

.thumbnail:hover {
    filter: grayscale(100%);
}

.thumbnail-1 {
    background-image: url("/images/thumbnails/tn1.png");
}

.thumbnail-2 {
    background-image: url("/images/thumbnails/tn2.png");
}

.thumbnail-3 {
    background-image: url("/images/thumbnails/tn3.png");
}

</style>
