<template>
  <div class="search-bar relative">
    <div class="text-slate-800 h-8">
      <input
          class="border-red px-4 h-full w-full"
          type="text"
      >
      <Icon
        class="icon absolute right-2 top-1/2"
        size="24"
        name="material-symbols:search"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style scoped lang="scss">
.search-bar {
  input {
    border-radius: 999px;
    border-color: transparent;
    user-select: none;
    outline: none;
  }

  .icon {
    transform: translateY(-50%);
  }
}
</style>
