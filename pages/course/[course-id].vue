<template>
  <div id="course-page">
    <header class="my-4 text-white">
      <h1 class="text-4xl font-bold">Course Title</h1>
      <h2 class="text-lg">by <a href="/instructor/craigjones">Craig Jones</a></h2>
    </header>

    <div class="flex gap-8">
      <div class="player-container flex-grow">
        <VideoPlayer
            class="video-player"
            ref="videoElement"
            src="/videos/craig.mp4"
            :controls="true"
            :onMounted="onVideoElementMounted"
        />
      </div>
      <div class="player-nav">
        <ul class="player-timestamps text-white flex flex-col gap-1">
          <li
            v-for="timestamp in arrTimestamps"
            class="timestamp"
          >
            <button
              class="px-8 py-4 w-full bg-stone-700 text-left"
              @click="moveToTime(timestamp.timeSeconds)"
            >
              {{ timestamp.timeFormatted }} - {{ timestamp.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>

    <footer class="my-4 text-white">
      <p class="text-2xl font-bold">About this course</p>
      <p class="text-lg">Learn the B-Team bottom game, including how to use wrestling concepts, turtling, heisting, and more for a comprehensive system</p>
      <ul class="list-disc ml-6">
        <li>Force your opponents into a new style of grappling with stand ups, 4 point positions, turtle position, and more used to create action</li>
        <li>See new positions that can revolutionize your bottom game, including the reverse Z guard and the false half guard</li>
        <li>Craig is one of the most popular instructors in the world, with ADCC Medals & sustained elite competition success</li>
        <li>Attack throws and submissions, with options for reversals, leg locks, back takes, and more across 6-volumes</li>
      </ul>
    </footer>
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
    height: 500px;
  }

  .player-nav {
    width: 320px;
    height: 500px;
    overflow-y: scroll;
  }
}
</style>
