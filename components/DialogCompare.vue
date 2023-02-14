<template>
  <div class="dialog-compare">
    <div class="dialog-compare-wrapper" v-if="compare?.products?.length > 0">
      <p class="mb-3 text-sm font-medium uppercase text-dark">
        сравнение товаров ({{ compare.products.length }})
      </p>
      <div
        class="dialog-compare-item"
        v-for="(item, index) in compare.products"
        :key="index"
      >
        <div class="compare-image">
          <img :src="$asset(item.media[0].file_name)" alt="" />
        </div>
        <div class="flex w-[70%] flex-col justify-between">
          <div>
            <p class="mb-2 text-sm font-medium">
              {{ item.title[$i18n.locale] }}
            </p>
            <div class="flex items-center">
              <div class="mr-2 text-sm text-grey">Цвет(а):</div>
              <div
                class="flex flex-wrap"
                v-for="(color, index) in item.colors"
                :key="'color-' + index"
              >
                <div
                  class="mr-2 h-4 w-4 rounded-full border border-dark"
                  :style="'background-color:' + color.color_code"
                ></div>
              </div>
            </div>
          </div>
          <p class="font-medium">{{ item.new_price | formatPrice }} ₸</p>
        </div>
      </div>
      <div class="flex justify-center">
        <a href="" class="btn-secondary mt-6">
          Перейти на страницу сравнения
        </a>
      </div>
      <div class="arrow">
        <img src="~/assets/img/icons/arrow-grey.png" alt="" />
      </div>
    </div>
    <div class="dialog-compare-wrapper" v-else>
      <h1 class="text-sm uppercase text-dark">Выберите товары для сравнения</h1>
      <div class="arrow">
        <img src="~/assets/img/icons/arrow-grey.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import formatPrice from "~/filters/formatPrice";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      compare: "compare/compare",
    }),
  },
  filters: {
    formatPrice,
  },
};
</script>

<style lang="scss" scoped>
.dialog-compare {
  @apply absolute -right-[39px] top-[175%];
  &-wrapper {
    @apply relative w-[500px] border border-grey-light bg-white px-10 py-7;
    .dialog-compare-item {
      @apply flex border-b border-grey-light py-5;
      .compare-image {
        @apply mr-4 h-[100px] w-[30%] border border-grey-light;
        img {
          @apply h-full w-full object-cover;
        }
      }
    }
    .arrow {
      @apply absolute right-10 -top-[23px] rotate-90;
      img {
        @apply w-5;
      }
    }
  }
}
</style>
