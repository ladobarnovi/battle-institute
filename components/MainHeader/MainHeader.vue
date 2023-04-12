<template>
  <header class="h-16 bg-[#1a1a1a] text-white">
    <div class="px-4 h-full">
      <div class="flex items-center h-full gap-4">
        <div class="logo">
          <h1 class="text-2xl font-bold">
            Battle Institute
          </h1>
        </div>

        <SearchBar class="ml-auto" />

        <button class="log-in px-4 py-1 bg-green-900 rounded-md">
          <span class="font-semibold">Log In</span>
        </button>
        <button class="become-instructor px-4 py-1 bg-sky-900 rounded-md">
          <span class="font-semibold">Become an Instructor</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBar from "~/components/SearchBar/SearchBar";
export default {
  name: "MainHeader",
  components: {SearchBar}
}
</script>

<style scoped lang="scss">
header {
  .search-bar {
    width: 350px;
  }
}
</style>
