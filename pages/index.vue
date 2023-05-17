<template>
  <div id="home" class="w-[95vw] mx-auto">
    <div class="py-8">
      <div class="slider-container">
        <div class="rounded-xl overflow-hidden">
          <Swiper
              :loop="true"
          >
            <SwiperSlide>
              <div class="slide-wrapper relative">
                <img src="/images/slide-img-1.jpg" alt="">
                <p class="text-3xl text-main-content mt-4">CQC in Action</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slide-wrapper relative">
                <img src="/images/slide-img-2.jpg" alt="">
                <p class="text-3xl text-main-content mt-4">TCCC</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slide-wrapper relative">
                <img src="/images/slide-img-3.jpg" alt="">
                <p class="text-3xl text-main-content mt-4">Basic Techniques and Drills</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  </div>
  <div class="bg-base-color-comp w-full">
        <CardList
            class="pt-8 w-[95vw] mx-auto"
            :arr-cards-data="arrCourses"
            title="Featured Courses"
        />
  </div>
   <div class="w-[95vw] mx-auto">
        <CardList
            class="pt-8 w-[95vw] mx-auto"
            :arr-cards-data="arrInstructors"
            title="Featured Courses"
        />
  </div>
</template>

<script lang="ts">
import { ICardDataProp } from "~/components/Card/Card.vue";

export default {
  name: "index",
  setup () {
    const arrCourses: ICardDataProp[] = [
      {
        name: "First aid fundamentals",
        img: "/images/tn1.png"
      },
      {
        name: "Close quarter combat",
        img: "/images/tn2.png"
      },
      {
        name: "First aid fundamentals",
        img: "/images/tn1.png"
      }
    ];

    const arrInstructors: ICardDataProp[] = [
      {
        name: "Brian Bowen",
        img: "/images/instructor/inst_1.jpg"
      },
      {
        name: "Tyler Romero",
        img: "/images/instructor/inst_2.jpg"
      },
      {
        name: "Ed Webster",
        img: "/images/instructor/inst_3.jpg"
      }
    ];

    return {
      arrCourses,
      arrInstructors
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .slide-wrapper {
    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      object-position: center;
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
}
</style>
