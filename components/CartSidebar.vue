<template>
  <div class="sidebar cart" :class="{ active: active }">
    <div class="backdrop" @click.prevent="active = false"></div>
    <div class="sidebar-content">
      <div
        class="flex items-center justify-between border-b border-dark px-7 py-5 lg:py-8 lg:px-10"
      >
        <h1 class="text-xl font-semibold uppercase text-dark lg:text-2xl">
          Корзина
        </h1>
        <button @click.prevent="active = false">
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
      <div class="flex h-full flex-col justify-between" v-if="items.length > 0">
        <div class="h-full overflow-y-auto">
          <CartProduct
            v-for="(item, index) in items"
            :key="index"
            :item="item"
            class="px-5"
          />
        </div>
        <div
          class="border-t border-dark px-7 pt-4 pb-7 lg:px-10 lg:pt-6 lg:pb-10"
        >
          <div class="flex justify-between">
            <p class="ext-sm uppercase">Всего:</p>
            <div class="text-xl font-semibold">
              {{ $store.getters["cart/total"] | formatPrice }} ₸
            </div>
          </div>
          <div class="mt-5 flex flex-col items-center">
            <a href="/order" class="btn-secondary w-full">оформить заказ</a>
            <UILink
              link="/cart"
              @click.native="active = false"
              class="btn-underline mt-3"
              >перейти в корзину</UILink
            >
          </div>
        </div>
      </div>
      <div v-else class="h-full px-7 py-5 uppercase text-grey lg:py-8 lg:px-10">
        Ваша корзина пуста
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import formatPrice from "~/filters/formatPrice";
export default {
  data: () => ({
    active: false,
  }),
  computed: {
    ...mapGetters({
      items: "cart/items",
    }),
  },
  filters: {
    formatPrice,
  },
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
  @apply invisible relative z-[60] opacity-0 transition-all duration-300 ease-in-quad;
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
    @apply fixed top-0 right-0 bottom-0 flex w-full max-w-xl translate-x-full flex-col justify-between bg-white transition-all duration-300 ease-in-quad lg:w-2/5;
  }
}
</style>
