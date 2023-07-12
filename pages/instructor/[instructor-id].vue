<template>
  <div class="container mx-auto pt-8 pb-8">
    <div class="instructor-info pb-8">
      <div class="left">
        <div class="image-container mb-4">

        </div>

        <ul class="links text-xl text-white">
          <li>
            <a href="/" target="_blank">
              Website
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <div class="right text-white">
        <p class="label font-light">Instructor</p>
        <p class="name text-3xl font-bold">Jack Johnson</p>
        <p class="subtitle text-lg">Former Navy Seal</p>
        <ul class="badges mt-2">
          <li>Bestseller author</li>
          <li>Vet</li>
          <li>Medal of Honor</li>
        </ul>

        <p class="text-3xl font-bold mt-8 mb-2">About Me</p>
        <div class="about">
          <p>Mi quis hendrerit dolor magna eget est lorem. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Ac tortor dignissim convallis aenean et tortor at. Tristique risus nec feugiat in fermentum posuere. Habitasse platea dictumst quisque sagittis purus sit. Tempor commodo ullamcorper a lacus vestibulum. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Sem et tortor consequat id porta nibh venenatis. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Quam nulla porttitor massa id neque aliquam. Dignissim convallis aenean et tortor at risus viverra adipiscing. Et malesuada fames ac turpis egestas integer eget. Consectetur adipiscing elit ut aliquam purus sit amet. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Scelerisque purus semper eget duis at tellus at urna. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Aliquet enim tortor at auctor urna.</p>
          <p>Urna porttitor rhoncus dolor purus non enim praesent. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Aliquet risus feugiat in ante metus dictum at tempor. Praesent tristique magna sit amet purus gravida quis blandit turpis. Elementum eu facilisis sed odio morbi quis commodo. Pulvinar elementum integer enim neque volutpat ac. Sapien pellentesque habitant morbi tristique. Risus ultricies tristique nulla aliquet enim tortor at. Integer quis auctor elit sed vulputate mi. Tempus egestas sed sed risus. Tellus integer feugiat scelerisque varius morbi enim. Ac ut consequat semper viverra nam libero. Massa massa ultricies mi quis hendrerit dolor. Viverra vitae congue eu consequat ac felis donec et odio. Et leo duis ut diam quam nulla. Mi quis hendrerit dolor magna eget est lorem. Mauris vitae ultricies leo integer. Ac felis donec et odio pellentesque diam volutpat. Etiam erat velit scelerisque in dictum non consectetur a erat.</p>
        </div>
      </div>
    </div>

    <div class="courses mt-12 text-white">
      <div class="categories">
        <p class="font-bold text-3xl mb-4">Categories</p>
        <ul class="text-xl">
          <li>Self Defence</li>
          <li>First Aid</li>
          <li>Firearm Safety</li>
        </ul>
      </div>
      <div class="course-list">
        <p class="font-bold text-3xl mb-4">Courses</p>
        <div class="course-grid">
          <article v-for="i in 10" class="course-card">
            <div class="image-container"></div>
            <p class="title text-xl">Course {{ i }}</p>
            <p>29.99$</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "[instructor-id]"
}
</script>

<style lang="scss" scoped>
  .container {
    .instructor-info {
      display: flex;
      gap: 32px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .left {
        .image-container {
          width: 256px;
          height: 256px;
          background-color: red;
          border-radius: 50%;
          overflow: hidden;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 12px;

          li {
            width: 256px;
            height: 48px;

            a {
              width: 100%;
              height: 100%;
              border: 1px solid white;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background-color 0.3s ease;

              &:hover {
                background-color: rgba(255, 255, 255, 0.1);
              }
            }
          }
        }
      }

      .right {
        flex-grow: 1;
        .label {
          opacity: 0.6;
        }

        .badges {
          display: flex;
          gap: 8px;

          li {
            font-size: 12px;
            background-color: white;
            border-radius: 999px;
            padding: 4px 12px;
            color: black;
            text-align: center;
          }
        }

        .about {
          p {
            margin-bottom: 8px;
          }
        }
      }
    }

    .courses {
      display: flex;
      gap: 32px;

      .categories {
        width: 256px;

        ul {
          li {
            cursor: pointer;
            margin-top: 16px;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            transition: border 0.3s;

            &:hover {
              border-bottom-color: rgba(255, 255, 255, 0.3);
            }
          }
        }
      }

      .course-list {
        flex-grow: 1;

        .course-grid {
          width: 100%;
          display: grid;
          grid-gap: 16px;
          grid-template-columns: 1fr 1fr 1fr;

          .course-card {
            width: 100%;

            .image-container {
              width: 100%;
              height: 196px;
              background-color: blue;
            }
          }
        }
      }
    }
  }
</style>
