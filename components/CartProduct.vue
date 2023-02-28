<template>
  <Transition name="slide-fade" mode="out-in">
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
            <UICounter
              :value="item.quantity"
              @change="update($event)"
              :color="color"
              :available="color?.available"
            />
          </div>
          <div class="text-sm font-medium">
            {{ item.total_price | formatPrice }} ₸
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapGetters } from "vuex";
import formatPrice from "~/filters/formatPrice";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  filters: {
    formatPrice,
  },
  computed: {
    ...mapGetters({
      color: "products/color",
    }),
  },
  watch: {
    onUpdate(item) {
      console.log(item.quantity);
    },
  },
  methods: {
    update(quantity, event) {
      const cart = {
        id: this.item.id,
        quantity: quantity,
      };
      this.$store.dispatch("cart/quantity", cart);
      quantity = event;
      if (event == this.color.available) {
        this.active = true;
      }
    },
    remove(item) {
      const ids = [item.id];
      this.$store.dispatch("cart/remove", ids);
    },
  },
};
</script>

<style></style>
