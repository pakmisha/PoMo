<template>
  <div>
    <div class="flex lg:justify-end">
      <div
        class="mb-10 flex w-full flex-col items-center justify-between lg:mb-20 lg:w-[75%] lg:flex-row"
      >
        <h2 class="heading-primary">Все товары</h2>
        <div class="mt-4 lg:mt-0">
          <select name="" id="" class="select-primary text-center">
            <option value="" selected>По дате добавления</option>
            <option value="">Сначала популярные</option>
            <option value="">Цена: по возрастанию</option>
            <option value="">Цена: по убыванию</option>
          </select>
        </div>
        <div class="mt-4 flex items-center lg:hidden">
          <button
            class="btn-primary mr-2"
            @click.prevent="$nuxt.$emit('open-modal', 'category')"
          >
            Категории
          </button>
          <button
            class="btn-primary"
            @click.prevent="$nuxt.$emit('open-modal', 'filters')"
          >
            Фильтры
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="hidden w-[20%] space-y-10 lg:block">
        <CategorySidebar />
        <FiltersSidebar />
      </div>
      <div class="w-full lg:w-[75%]">
        <div class="products">
          <div
            class="products__item"
            v-for="(product, index) in products"
            :key="index"
          >
            <Product :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      products: "products/products",
    }),
  },
};
</script>

<style lang="scss" scoped>
.products {
  @apply grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3;
  &__item {
    &:nth-child(5n) {
      @apply h-full md:col-span-2 md:row-span-2;
    }
  }
}
</style>
