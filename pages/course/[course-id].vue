<template>
  <div id="course-page">
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
        <ul class="player-timestamps text-white">
          <li
              v-for="timestamp in arrTimestamps"
              class="timestamp"
          >
            <button @click="moveToTime(timestamp.time)">
              {{ timestamp.label }}
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
        time: 10,
        label: "At 10 seconds"
      },
      {
        time: 20,
        label: "At 20 seconds"
      },
      {
        time: 30,
        label: "At 30 seconds"
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
  .player-container {

  }
  .video-player {
    width: 100%;
  }
}
</style>
