<template>
  <div class="">
    <div class="compare">
      <div class="compare__item">
        <h4 class="title">Наличие товара</h4>
        <div v-for="(item, index) in compare" :key="index" class="description">
          {{ item.status.includes("IN_STOCK") ? "В наличии" : "На заказ" }}
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
  @apply w-full overflow-x-auto;
  &__item {
    @apply flex w-fit border-b border-grey-light pb-3 pt-5;
    .title {
      @apply w-[200px] whitespace-nowrap text-sm font-medium uppercase lg:w-[300px];
    }
    .description {
      @apply w-[300px] text-sm text-grey lg:w-[400px];
    }
  }
}
</style>
