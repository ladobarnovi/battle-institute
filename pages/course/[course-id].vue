<template>
  <div id="course-page">

    <div class="flex flex-row">
      <div class="flex flex-col basis-3/4">

        <div class="player-container flex-grow">
            <VideoPlayer
                class="video-player"
                ref="videoElement"
                src="/videos/craig.mp4"
                :controls="true"
                :onMounted="onVideoElementMounted"
            />
        </div>

          <footer class="text-white space-y-4 p-6">
              <div>
                <h1 class="text-4xl font-bold text-main-content">Lorem ipsum dolor sit amet</h1>
                <h2 class="text-lg text-main-content">In metus vulputate eu scelerisque. Id nibh tortor id aliquet lectus proin nibh nisl. Vitae auctor eu augue ut lectus.</h2>
                <h2 class="text-lg text-main-content">Created by <a class="font-bold underline" href="/instructor/craigjones">Craig Jones</a></h2>
              </div>
              <div class="border-t border-main-content/20 pt-2">
                <p class="text-2xl font-bold text-main-content">About this course</p>
                <p class="list-disc text-main-content mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Diam volutpat commodo sed egestas. Vel pharetra vel turpis nunc eget lorem dolor sed. Faucibus vitae aliquet nec ullamcorper sit.
                  Gravida quis blandit turpis cursus in hac habitasse. Velit egestas dui id ornare arcu odio. Adipiscing enim eu turpis egestas pretium aenean pharetra.
                  Pulvinar pellentesque habitant morbi tristique senectus. Consectetur purus ut faucibus pulvinar. Lectus proin nibh nisl condimentum.
                  Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Etiam dignissim diam quis enim lobortis.
                  Urna nunc id cursus metus aliquam eleifend mi. Purus viverra accumsan in nisl. Id ornare arcu odio ut sem nulla. Lorem mollis aliquam ut porttitor.
                  Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
                </p>
               </div>
         </footer>
      </div>

      <div class="player-nav basis-1/4 border-l border-main-content/10">
      <div class="px-8 py-4 text-xl text-main-content font-bold">Course content</div>
      <ul class="text-white flex flex-col text-lg font-bold">
        <li v-for="sec in sections">
          <button class="w-full h-[72px] text-main-content text-left px-8 border-t border-main-content bg-white/5"> {{sec.header}}</button>
        </li>
      </ul>

        <ul class="player-timestamps text-white flex flex-col gap-1 text-lg">
          <li
            v-for="timestamp in arrTimestamps"
            class="timestamp"
          >
            <button
              class="px-8 py-4 w-full text-left text-main-content"
              @click="moveToTime(timestamp.timeSeconds)"
            >
              {{ timestamp.timeFormatted }} - {{ timestamp.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import { shallowRef } from "vue";
import { VideoPlayer } from "@videojs-player/vue";
import { VideoJsPlayer } from "video.js"
export default {
  name: "[course-id]",
  components: {
    VideoPlayer
  },
  setup() {
    const arrTimestamps = [
      {
        timeFormatted: "0 : 10",
        timeSeconds: 10,
        label: "Intro"
      },
      {
        timeFormatted: "0 : 20",
        timeSeconds: 20,
        label: "Topic 2"
      },
      {
        timeFormatted: "0 : 30",
        timeSeconds: 30,
        label: "Topic 3"
      },
      {
        timeFormatted: "0 : 20",
        timeSeconds: 20,
        label: "Topic 2"
      },
      {
        timeFormatted: "0 : 30",
        timeSeconds: 30,
        label: "Topic 3"
      },
      {
        timeFormatted: "0 : 20",
        timeSeconds: 20,
        label: "Topic 2"
      },
      {
        timeFormatted: "0 : 30",
        timeSeconds: 30,
        label: "Topic 3"
      },
      {
        timeFormatted: "0 : 20",
        timeSeconds: 20,
        label: "Topic 2"
      },
      {
        timeFormatted: "0 : 30",
        timeSeconds: 30,
        label: "Topic 3"
      }
    ];

    const sections = [
      {
        header: "Section 1: Intro"
      },
      {
        header: "Section 2: Topic 1"
      },
      {
        header: "Section 3: Topic 2"
      },
      {
        header: "Section 4: Topic 3"
      },
      {
        header: "Section 5: Outro"
      }
    ];

    const player = shallowRef<VideoJsPlayer>();

    function onVideoElementMounted(args: any): void {
      player.value = args.player;
    }

    function moveToTime(seconds: number): void {
      if (player.value == null) {
        return;
      }

      player.value.play();
      player.value.currentTime(seconds);
    }

    return {
      arrTimestamps,
      sections,
      onVideoElementMounted,
      moveToTime
    }
  }
}
</script>

<style scoped lang="scss">
#course-page {
  header {

  }

  .player-container {

  }
  .video-player {
    width: 100%;
    height: 800px;
  }

  .player-nav {
    width: 320px;
    overflow-y: scroll;
  }
}
</style>
