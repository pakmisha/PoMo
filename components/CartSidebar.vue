<template>
  <div class="sidebar" :class="{ active: active }">
    <div class="backdrop"></div>
    <div class="sidebar-content">
      <div
        class="flex items-center justify-between border-b border-dark px-10 py-8"
      >
        <h1 class="text-2xl font-semibold uppercase text-dark">Корзина</h1>
        <button @click.prevent="active = false">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L13 13" stroke="#101820" stroke-linecap="round" />
            <path d="M13 1L1 13" stroke="#101820" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <div class=""></div>
      <div class="border-t border-dark px-10 pt-6 pb-10">
        <div class="flex justify-between">
          <p class="ext-sm uppercase">Всего:</p>
          <div class="text-xl font-semibold">515 300 ₸</div>
        </div>
        <div class="mt-5 flex flex-col items-center">
          <a href="" class="btn-secondary w-full">оформить заказ</a>
          <a href="" class="btn-underline mt-3">перейти в корзину</a>
        </div>
      </div>
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
      if (name == "sidebarCart") {
        this.active = true;
      }
    });
  },
};
</script>

<style lang="scss">
.sidebar {
  @apply invisible relative z-50 opacity-0 transition-all duration-300 ease-in-quad;
  .backdrop {
    @apply fixed inset-0 bg-black opacity-60;
  }
  &.active {
    @apply visible opacity-100;
    .sidebar-content {
      @apply translate-x-0;
    }
  }
  &-content {
    @apply fixed top-0 right-0 bottom-0 flex w-2/5 max-w-xl translate-x-full flex-col justify-between bg-white transition-all duration-300 ease-in-quad;
  }
}
</style>
