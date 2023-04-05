<template>
  <div class="card">
    <div class="wrapper relative">
      <img
        class="absolute top-0 left-0 w-full h-full object-center object-cover"
        :src="data.img"
        :alt="data.name"
      />

      <div class="absolute bottom-0 left-0 w-full">
        <div class="name-wrapper px-4 py-1">
          <p class="text-white text-xl">{{ data.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue"

export interface ICardDataProp {
  name: string;
  img: string;
}
export default {
  name: "Card",
  props: {
    data: {
      type: Object as PropType<ICardDataProp>,
      required: true
    }
  },
  setup() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.card {
  .wrapper {
    padding-top: 50%;
  }

  .name-wrapper {
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
