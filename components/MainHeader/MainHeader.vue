<template>
  <header class="h-16 bg-base-color text-white" :class="{'main-page-header': routeName == 'index'}">
    <!--<div>-->
      <div class="px-4 h-[64px]">
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
     <!--</div>-->
  </header>
</template>

<script>
import SearchBar from "~/components/SearchBar/SearchBar";
export default {
  name: "MainHeader",
  components: {SearchBar},
  setup () {
    const routeName = computed(() => {
      return useRoute().name
    })
    return { routeName }
  }
}
</script>

<style scoped lang="scss">

.main-page-header{
//  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/banner/banner1.png");
//  background-attachment: fixed;
//  background-size: cover;
//  background-position: center;
//  height: 100vh;
}

header {
  .search-bar {
    width: 350px;
  }
}
</style>
