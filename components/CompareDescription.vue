<template>
  <div class="">
    <div v-if="compare?.products?.length > 0" class="compare">
      <div class="compare__nav">
        <p
          class="title"
          v-for="(param, index) in compare.compares"
          :key="index"
        >
          {{ param[$i18n.locale] }}
        </p>
      </div>
      <div
        class="compare__content"
        v-for="(product, index) in compare.products"
        :key="index"
      >
        <div v-if="compare.compares.brand" class="compare__content__item">
          <span v-if="product.brand != null">{{ product.brand.name }}</span>
          <span v-else> - </span>
        </div>
        <div
          v-if="compare.compares.countertop_materials"
          class="compare__content__item"
        >
          <span v-if="product.countertop_materials != null">{{
            product.countertop_materials.title[$i18n.locale]
          }}</span>
          <span v-else> - </span>
        </div>
        <div v-if="compare.compares.collection" class="compare__content__item">
          <span v-if="product.collection != null">{{
            product.collection.name
          }}</span>
          <span v-else> - </span>
        </div>
        <div v-if="compare.compares.shapes" class="compare__content__item">
          <span v-if="product.shapes != null">{{
            product.shapes.title[$i18n.locale]
          }}</span>
          <span v-else> - </span>
        </div>
        <div v-if="compare.compares.purposes" class="compare__content__item">
          <span v-if="product.purposes != null">{{
            product.purposes.title[$i18n.locale]
          }}</span>
          <span v-else> - </span>
        </div>
        <div
          v-if="compare.compares.corpus_materials"
          class="compare__content__item"
        >
          <span v-if="product.corpus_materials != null">{{
            product.corpus_materials.title[$i18n.locale]
          }}</span>
          <span v-else> - </span>
        </div>
        <div v-if="compare.compares.mattresses" class="compare__content__item">
          <span v-if="product.mattresses != null">{{
            product.mattresses.size
          }}</span>
          <span v-else> - </span>
        </div>
        <div>
          <div
            class="compare__content__item"
            v-for="(char, index) in product.characteristics"
            :key="index"
          >
            <span v-if="product.characteristics.length > 0">{{
              char.value
            }}</span>
          </div>
          <div
            class="compare__content__item"
            v-if="product.characteristics.length < 1"
          >
            <span> - </span>
          </div>
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
