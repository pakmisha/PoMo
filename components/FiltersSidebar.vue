<template>
  <div class="space-y-10">
    <div>
      <h3 class="mb-5 text-sm font-medium uppercase text-dark">Наличие</h3>
      <div class="space-y-2">
        <div class="flex items-center">
          <input
            type="checkbox"
            id="check-1"
            value="IN_STOCK"
            class="input-checkbox mr-2"
            @click="sendStatus($event.target.value)"
          />
          <label class="text-sm text-dark">В наличии</label>
        </div>
        <div class="flex items-center">
          <input
            type="checkbox"
            id="check-2"
            value="TO_ORDER"
            class="input-checkbox mr-2"
            @click="sendStatus($event.target.value)"
          />
          <label class="text-sm text-dark">На заказ</label>
        </div>
      </div>
    </div>
    <div>
      <h3 class="mb-5 text-sm font-medium uppercase text-dark">Цена</h3>
      <div class="w-full">
        <vue-slider
          v-model="price_range.value"
          :interval="10"
          :max="1000"
          :tooltip="'none'"
          :height="2"
        ></vue-slider>
        <div class="mt-5 flex">
          <div class="mr-3 w-1/2">
            <input
              type="number"
              class="input-range-number"
              step="1"
              v-model="price_range.value[0]"
            />
          </div>
          <div class="w-1/2">
            <input
              type="number"
              class="input-range-number"
              step="1"
              v-model="price_range.value[1]"
            />
          </div>
        </div>
        <!-- <div class="range-slider" v-if="true">
          <div class="relative pt-7">
            <input
              type="range"
              class="input-range"
              step="1"
              v-model="price_range.min"
            />

            <input
              type="range"
              class="input-range"
              step="1"
              v-model="price_range.max"
            />
          </div>
          <div class="flex">
            <div class="mr-3 w-1/2">
              <input
                type="number"
                class="input-range-number"
                step="1"
                v-model="price_range.min"
              />
            </div>

            <div class="w-1/2">
              <input
                type="number"
                class="input-range-number"
                step="1"
                v-model="price_range.max"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="space-y-10" v-for="(filter, index) in filters" :key="index">
      <div v-if="filter.slug.includes('colors')">
        <h3 class="mb-5 text-sm font-medium uppercase text-dark">
          {{ filter.title[$i18n.locale] }}
        </h3>
        <div class="flex flex-wrap">
          <div
            class="color"
            :style="'background-color:' + item.color_code"
            v-for="(item, index) in filter.values"
            :key="index"
          >
            <input
              type="checkbox"
              class="input-color"
              @click="setFilter({ filter, item })"
            />
          </div>
        </div>
      </div>
      <div v-if="!filter.slug.includes('colors')">
        <h3 class="mb-5 text-sm font-medium uppercase text-dark">
          {{ filter.title[$i18n.locale] }}
        </h3>
        <div class="space-y-2">
          <div
            class="flex items-center"
            v-for="(item, index) in filter.values"
            :key="index"
          >
            <input
              type="checkbox"
              :value="item.id"
              :id="filter.slug + '-' + item.id"
              @click="setFilter({ filter, item })"
              class="input-checkbox mr-2"
            />
            <label
              class="text-sm text-dark"
              :for="filter.slug + '-' + item.id"
              >{{ item.title[$i18n.locale] }}</label
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex">
      <UIButton class="btn-primary">сбросить фильтры</UIButton>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    price_range: {
      value: [0, 1000],
      // min: 5000,
      // max: 2342342,
    },
  }),

  computed: {
    ...mapGetters({
      filters: "products/filters",
      products: "products/products",
      // maxPrice: "products/maxPrice",
      // minPrice: "products/minPrice",
    }),
  },
  watch: {
    price_range: {
      handler(newValue, oldValue) {
        const value = newValue.value;
        this.$store.dispatch("products/setPrices", value);
      },
      deep: true,
    },
  },
  methods: {
    setFilter({ filter, item }) {
      const key = filter.slug;
      const value = item.id;
      this.$store.dispatch("products/setFilters", { key, value });
    },
    sendStatus(event) {
      const key = "status";
      const value = event;
      this.$store.dispatch("products/setFilters", { key, value });
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  @apply mr-4 h-6 w-6 cursor-pointer rounded-full transition-all duration-300 ease-in-quad;
}
</style>
