<template>
  <div class="product">
    <div class="product-image">
      <img :src="image" alt="" />
    </div>
    <div class="product-bottom">
      <p class="text-sm font-semibold uppercase">
        Кресло TANGYUAN, MAYA A2267–2A
      </p>
      <p class="text-sm">515 300 ₸</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.product {
  &-image {
    @apply border border-dark;
    img {
      @apply h-full w-full object-cover object-center;
    }
  }
  &-bottom {
    @apply mt-4 flex items-center justify-between border-b border-black pb-2;
  }
}
</style>
