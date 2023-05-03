<template>
  <div id="course-page">

    <div class="flex flex-row min-h-[calc(100vh-104px)]">
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
                <h1 class="text-4xl font-bold text-main-content">First Aid Course for Combat Troops</h1>
                <h2 class="text-lg text-main-content">First Aid course for combat situations suitable for all levels.</h2>
                <h2 class="text-lg text-main-content">Created by <a class="font-bold underline text-link-color" href="/instructor/craigjones">Lado Barnovi</a></h2>
              </div>
              <div class="border-t border-main-content/20 pt-2">
                <p class="text-2xl font-bold text-main-content">About this course</p>
                <p class="list-disc text-main-content mt-1">
                  Lesson 1: Introduction to First Aid

Objectives: Understand the importance of first aid in combat situations, and the basic principles of first aid.
Topics covered: Definition of first aid, importance of first aid in the field, legal and ethical considerations, primary survey, and the ABCDE approach.

Lesson 2: Basic Life Support

Objectives: Understand how to provide basic life support to injured soldiers, including airway management, breathing, and circulation.
Topics covered: Clearing the airway, performing CPR, using an Automated External Defibrillator (AED), controlling bleeding, and shock management.

Lesson 3: Wound Management

Objectives: Understand how to manage common battlefield injuries, including gunshot wounds, shrapnel wounds, and burns.
Topics covered: Recognizing and assessing injuries, dressing and bandaging wounds, controlling bleeding, treating burns, and wound irrigation.

Lesson 4: Environmental Emergencies

Objectives: Understand how to manage environmental emergencies, including heat injuries and cold injuries.
Topics covered: Recognizing and assessing environmental emergencies, managing heat exhaustion and heat stroke, hypothermia and frostbite, and prevention of environmental emergencies.

Lesson 5: Tactical Combat Casualty Care (TCCC)

Objectives: Understand the principles of TCCC, and how to apply them in combat situations.
Topics covered: History and evolution of TCCC, phases of care, airway management, hemorrhage control, shock management, and battlefield medicine.

Lesson 6: Integration and Practice

Objectives: Integrate all previous lessons and practice skills in realistic scenarios.
Topics covered: Simulated scenarios, stress and time management, debriefing and evaluation.
This curriculum can be structured as a series of videos or as a combination of videos and in-person training sessions. Visual aids such as diagrams, animations, and demonstrations should be included to enhance the learning experience.

Note: First Aid is a critical skill set for soldiers in the field. It should be taught by certified instructors with appropriate training and experience, and soldiers should always prioritize their own safety and that of others while providing first aid.


                </p>
               </div>
         </footer>
      </div>

      <div class="player-nav basis-1/4 border-l border-main-content/10 bg-base-color-comp">
      <div class="px-8 py-4 text-xl text-main-content font-bold">Course content</div>
      <ul class="text-white flex flex-col text-lg font-bold">
        <li v-for="(sec,index) in sections">
          <button class="w-full h-[76px] text-main-content text-left px-8 border-t border-main-content/10 bg-accent-color-dark/20 focus:bg-accent-color-light/40"
          @click="toggleTimestamps(index)">
            <p class="">{{sec.header}}</p>
            <p class="font-normal text-base">{{sec.duration}} - {{sec.parts}} parts</p>
          </button>
            <ul v-if="sec.timestamps" :id="'timestamps' + index" class="player-timestamps text-white flex flex-col gap-1 text-lg">
              <li
                v-for="timestamp in sec.timestamps"
                class="timestamp">
                <button
                  class="px-8 py-4 font-normal text-main-content"
                  @click="moveToTime(timestamp.timeSeconds)">
                  {{ timestamp.timeFormatted }} - {{ timestamp.label }}
                </button>
              </li>
          </ul>
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
        timeFormatted: "0:10",
        timeSeconds: 10,
        label: "Definition of first aid",
      },
      {
        timeFormatted: "0:25",
        timeSeconds: 25,
        label: "Importance of first aid in the field"
      },
      {
        timeFormatted: "0:30",
        timeSeconds: 30,
        label: "Legal and ethical considerations"
      },
      {
        timeFormatted: "0:35",
        timeSeconds: 32,
        label: "Primary survey"
      },
      {
        timeFormatted: "0:35",
        timeSeconds: 35,
        label: "The ABCDE approach"
      }
    ];

    const sections = [
      {
        header: "Lesson 1: Introduction to First Aid",
        duration: "20min",
        parts: 1,
        timestamps: null
      },
      {
        header: "Lesson 2: Basic Life Support",
        duration: "42min",
        parts: 2,
        timestamps: null
      },
      {
        header: "Lesson 3: Wound Management",
        duration: "1hr 26min",
        parts: 6,
        timestamps: arrTimestamps
      },
      {
        header: "Lesson 4: Environmental Emergencies",
        duration: "55min",
        parts: 3,
        timestamps: null
      },
      {
        header: "Lesson 5: Tactical Combat Casualty Care (TCCC)",
        duration: "4min",
        parts: 1,
        timestamps: null
      },
      {
        header: "Lesson 6: Integration and Practice",
        duration: "4min",
        parts: 1,
        timestamps: null
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

    function toggleTimestamps(idx: number): void {
      const stamps = document.getElementById("timestamps" + idx);
      console.log("Currenly the element is " + stamps.style.display)

      if(stamps.style.display == "flex" || !stamps.style.display){
        stamps.style.display = "none";
        console.log("Changing from flex to none")
      } else {
        stamps.style.display = "flex";
        console.log("Changing from none to flex")
      }
    }

    return {
      sections,
      onVideoElementMounted,
      moveToTime,
      toggleTimestamps
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
