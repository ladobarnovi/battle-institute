<template>
  <header class="h-16 bg-base-color text-white">
    <div class="px-4 h-full">
      <div class="flex items-center h-full gap-4">
        <div class="logo">
          <a href="/">
            <img src="/images/BI.svg" class="h-[170px]">
          </a>
        </div>
        <SearchBar class="mr-auto" />
        <MainNavigation />
       <div class="flex gap-8 min-w-[360px]">
        <button class="log-in px-4 py-1 bg-main-content rounded-md">
          <span class="font-semibold text-base-color">Log In</span>
        </button>
        <button class="become-instructor px-4 py-1 border border-main-content rounded-md">
          <span class="font-semibold text-main-content">Become an Instructor</span>
        </button>
      </div>

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
