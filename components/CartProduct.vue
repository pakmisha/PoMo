<template>
  <div v-if="item" class="flex border-b border-grey py-7 md:flex-row">
    <div class="mr-5 w-[125px] md:w-[200px]">
      <img :src="$asset(item.product.image)" alt="" />
    </div>
    <div class="flex w-full flex-col justify-between">
      <div class="mb-5 flex justify-between">
        <div class="w-[80%]">
          <p class="mb-2 text-xs font-medium uppercase text-dark md:text-sm">
            {{ item.product.title }}
          </p>
          <p class="text-sm text-grey">
            Цвет: {{ item.product.color_langs[$i18n.locale] }}
          </p>
        </div>
        <button @click="remove(item)" class="flex">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L13 13" stroke="#101820" stroke-linecap="round" />
            <path d="M13 1L1 13" stroke="#101820" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex">
          <UICounter :value="item.quantity" />
        </div>
        <div class="text-sm font-medium">2 085 200 ₸</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove(item) {
      this.$store.dispatch("cart/remove", { item });
    },
  },
};
</script>

<style></style>
