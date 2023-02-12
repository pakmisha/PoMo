<template>
  <div class="">
    <div class="compare">
      <div class="compare__nav">
        <p class="title">Наличие товара</p>
        <p class="title" v-for="(item, index) in compare" :key="index">
          {{ item.characteristics[$i18n.locale] }}
        </p>
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
  &__nav {
    .title {
      @apply w-[200px] whitespace-nowrap border-b border-grey py-3 text-sm font-medium uppercase lg:w-[300px];
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
