<template>
  <div class="search-bar relative">
    <div class="text-slate-800 h-8">
      <input
          class="border-red px-4 h-full w-full text-main-content/10"
          type="text"
          placeholder="Search"
      >
      <Icon
        class="icon absolute left-2 top-1/2"
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
    background: rgba(217,217,217,.1);
    color: rgba(228,230,235,.7);
  }

input[type="text"]::placeholder {
  text-indent: 22px;
  font-size: 1.2rem;
}

  .icon {
    transform: translateY(-50%);
    color: rgba(228,230,235,.7);
  }
}
</style>
