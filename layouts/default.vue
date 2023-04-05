<template>
  <div id="default-layout">
    <MainHeader />
    <MainNavigation />

    <div class="container mx-auto">
      <slot />
    </div>

    <MainFooter />
  </div>
</template>

<script lang="ts">
import MainHeader from "@/components/MainHeader/MainHeader.vue";
import MainFooter from "@/components/MainFooter/MainFooter.vue";
export default {
  name: "default",
  components: {MainFooter, MainHeader},
  setup() {
    const a: number = 0;
  }
}
</script>

<style scoped>

</style>
