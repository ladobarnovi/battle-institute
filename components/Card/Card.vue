<template>
  <div class="card">
    <div class="wrapper relative">
      <img
        class="absolute top-0 left-0 w-full h-full object-center object-cover rounded-md"
        :src="data.img"
        :alt="data.name"
      />
    </div>
    <p class="text-main-content text-2xl font-medium my-4">{{ data.name }}</p>
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
