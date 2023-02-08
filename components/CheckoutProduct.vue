<template>
  <div class="flex border-b border-grey py-5">
    <div class="mr-3 w-[150px] lg:w-[200px]">
      <img :src="$asset(product.image)" alt="" />
    </div>
    <div
      class="flex w-full flex-col justify-between lg:flex-row lg:items-center"
    >
      <div class="mb-2 w-full lg:w-[70%]">
        <p class="mb-2 text-sm font-medium uppercase text-dark">
          {{ product.title }}
        </p>
        <p class="text-sm text-grey">
          Цвет: {{ product.color_langs[$i18n.locale] }}
        </p>
      </div>
      <div class="text-sm font-medium">{{ product.price | formatPrice }} ₸</div>
    </div>
  </div>
</template>

<script>
import formatPrice from "~/filters/formatPrice";
export default {
  props: {
    product: {
      type: Object,
    },
  },
  filters: {
    formatPrice,
  },
};
</script>

<style></style>
