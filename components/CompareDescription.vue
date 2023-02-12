<template>
  <div class="">
    <div v-if="compare.length > 0" class="compare">
      <div class="compare__nav">
        <p class="title">Название товара</p>
        <p class="title">Наличие товара</p>
        <!-- <p class="title" v-tr="$i18n">
          {{ compare[0].collection.name }}
        </p> -->

        <p
          class="title"
          v-for="(param, index) in compare[0].characteristics"
          :key="index"
        >
          {{ param.title[$i18n.locale] }}
        </p>
      </div>
      <div
        class="compare__content"
        v-for="(item, index) in compare"
        :key="index"
      >
        <div class="compare__content__item">
          {{ item.title[$i18n.locale] }}
        </div>
        <div class="compare__content__item">
          {{ item.status.includes("IN_STOCK") ? "В наличии" : "На заказ" }}
        </div>
        <div
          class="compare__content__item"
          v-for="(param, index) in item.characteristics"
          :key="index"
        >
          <span>{{ param.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    compare: Array,
    required: true,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.compare {
  @apply flex overflow-x-auto;
  &__nav {
    @apply w-[250px] lg:w-[400px];
    .title {
      @apply w-[400px] whitespace-nowrap border-b border-grey py-4 text-sm font-medium uppercase;
    }
  }
  &__content {
    &__item {
      @apply w-[250px] whitespace-nowrap border-b border-grey py-4 text-sm lg:w-[400px];
    }
  }
}
// .compare {
//   @apply w-full overflow-x-auto;
//   &__item {
//     @apply flex w-fit border-b border-grey-light pb-3 pt-5;
//     .title {
//       @apply w-[200px] whitespace-nowrap text-sm font-medium uppercase lg:w-[300px];
//     }
//     .description {
//       @apply w-[300px] text-sm text-grey lg:w-[400px];
//     }
//   }
// }
</style>
