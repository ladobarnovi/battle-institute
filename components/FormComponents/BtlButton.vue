<template>
  <button class="text-center h-12 w-full font-semibold text-xl">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BtlButton"
}
</script>

<style scoped lang="scss">
  button {
    background-color: #554CBD;
    color: white;
  }
</style>
