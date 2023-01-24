<template>
  <div class="search" :class="{ active: active }">
    <div
      class="backdrop fixed top-0 left-0 bottom-0 right-0 z-30 bg-black bg-opacity-60"
      @click.prevent="active = false"
    ></div>
    <div class="search-content section-container">
      <div class="serach-content-icon">
        <svg
          width="25"
          height="25"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11.332" cy="11.333" r="10" stroke="#101820" />
          <path
            d="M26.332 26.333L21.332 21.333"
            stroke="#101820"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="search-content-input mx-5 lg:mx-10">
        <input
          type="text"
          class="w-full bg-light py-2 outline-none"
          placeholder="ВВЕДИТЕ ЗАПРОС..."
        />
      </div>
      <button class="serach-content-close" @click.prevent="active = false">
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L13 13" stroke="#101820" stroke-linecap="round" />
          <path d="M13 1L1 13" stroke="#101820" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
  }),
  created() {
    this.$nuxt.$on("toggle", (name) => {
      if (name == "search") {
        this.active = !this.active;
      }
    });
  },
};
</script>

<style lang="scss">
.search {
  @apply invisible absolute top-[101%] left-0 z-30 w-full opacity-0 transition-all duration-300 ease-in-quad;
  &-content {
    @apply invisible relative z-30 flex w-full translate-y-10 items-center justify-between bg-light py-2 opacity-0 transition-all duration-300 ease-in-quad lg:py-4;
    &-icon {
    }
    &-input {
      @apply w-full;
    }
  }
  &.active {
    @apply visible opacity-100;
    .search-content {
      @apply visible translate-y-0 opacity-100;
    }
  }
}
</style>
