<template>
  <div id="home">
    <div class="py-8">
      <div class="slider-container">
        <div class="rounded-xl overflow-hidden">
          <Swiper
              :loop="true"
          >
            <SwiperSlide>
              <div class="slide-wrapper relative">
                <img src="/images/slide-img-1.jpg" alt="">
                <p class="text-3xl">Slide 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slide-wrapper relative">
                <img src="/images/slide-img-2.jpg" alt="">
                <p class="text-3xl">Slide 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slide-wrapper relative">
                <img src="/images/slide-img-3.jpg" alt="">
                <p class="text-3xl">Slide 3</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <CardList
          class="mt-8"
          :arr-cards-data="arrCourses"
          title="Featured Courses"
      />
      <CardList
          class="mt-8"
          :arr-cards-data="arrInstructors"
          title="Featured Instructors"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ICardDataProp } from "~/components/Card/Card.vue";

export default {
  name: "index",
  setup () {
    const arrCourses: ICardDataProp[] = [
      {
        name: "Course 1",
        img: "/images/slide-img-1.jpg"
      },
      {
        name: "Course 2",
        img: "/images/slide-img-2.jpg"
      },
      {
        name: "Course 3",
        img: "/images/slide-img-3.jpg"
      }
    ];

    const arrInstructors: ICardDataProp[] = [
      {
        name: "Instructor 1",
        img: "/images/slide-img-1.jpg"
      },
      {
        name: "Instructor 2",
        img: "/images/slide-img-2.jpg"
      },
      {
        name: "Instructor 3",
        img: "/images/slide-img-3.jpg"
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
