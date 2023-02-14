<template>
  <div>
    <div class="flex lg:justify-end">
      <div
        class="mb-10 flex w-full flex-col items-center justify-between lg:mb-14 lg:w-[75%] lg:flex-row"
      >
        <h2 class="heading-primary">
          {{ category == null ? "Все" : category.title[$i18n.locale] }}
        </h2>
        <div class="mt-4 lg:mt-0">
          <select
            v-model="sort"
            name=""
            id=""
            class="select-primary text-center"
            @change="sortBy($event)"
          >
            <option :value="null" disabled selected>Сортировать по:</option>
            <option value="all">Все:</option>
            <option value="price_asc">Сначала дешевле:</option>
            <option value="price_desc">Сначала дороже:</option>
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
      <div v-if="products" class="w-full lg:w-[75%]">
        <div class="products">
          <div
            class="products__item"
            v-for="(product, index) in products.data"
            :key="index"
          >
            <Product :product="product" />
          </div>
        </div>
        <UIPagination
          v-if="products.data.length >= 1"
          :data="products"
          @changed="getResults"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    sort: null,
  }),
  computed: {
    ...mapGetters({
      products: "products/products",
      category: "products/category",
    }),
  },
  methods: {
    sortBy(event) {
      this.$store.dispatch("products/setSort", event.target.value);
    },
    getResults(page = 1) {
      this.$store.dispatch("products/getProducts", page);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  @apply grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3;
  &__item {
    @apply h-[400px] lg:h-[450px];
    &:nth-child(5n) {
      @apply h-[400px] md:col-span-2 md:row-span-2 md:h-full;
    }
  }
}
</style>
