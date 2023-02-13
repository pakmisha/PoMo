<template>
  <ModalsModal v-if="order != null" name="order" class="modal modal-md">
    <div class="modal-wrapper">
      <div class="order-item flex justify-between">
        <div>
          <h3 class="heading-secondary mb-3">
            Заказ от {{ formatDate(order.created_at) }}
          </h3>
          <p class="text-sm text-grey">
            Номер заказа: {{ order.order_number }}
          </p>
        </div>
        <button class="flex" @click="$nuxt.$emit('close-modal', 'order')">
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
      <div class="order-item">
        <p class="mb-2 text-sm font-medium uppercase text-dark">
          Статус заказа:
        </p>
        <p class="text-sm text-grey">{{ order.status_human[$i18n.locale] }}</p>
      </div>
      <div class="order-item">
        <p class="mb-2 text-sm font-medium uppercase text-dark">Оплата:</p>
        <p class="text-sm text-grey">
          Заказ на сумму:
          <span class="font-medium">{{ order.price | formatPrice }} ₸</span>
        </p>
      </div>
      <div class="order-item">
        <p class="mb-2 text-sm font-medium uppercase text-dark">Доставка:</p>
        <div class="text-sm text-grey">
          <p>
            Страна: <span class="font-medium">{{ order.country }}</span>
          </p>
          <p>
            Город: <span class="font-medium"> {{ order.city }}</span>
          </p>
          <p>
            Ожидается доставка по адресу
            <span class="font-medium"> {{ order.address }}</span
            >. С вами свяжется сотрудник сервисной службы и сообщит дату и время
            доставки.
          </p>
        </div>
      </div>
      <div class="order-item">
        <p class="mb-2 text-sm font-medium uppercase text-dark">
          Содержание заказа:
        </p>
        <div class="space-y-5">
          <CheckoutProduct
            v-for="(product, index) in order.products"
            :key="index"
            :product="product"
          />
        </div>
      </div>
    </div>
  </ModalsModal>
</template>

<script>
import formatPrice from "~/filters/formatPrice";
export default {
  data: () => ({
    order: null,
  }),
  filters: {
    formatPrice,
  },

  created() {
    this.$nuxt.$on("send", (item) => {
      this.order = item;
    });
  },
  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) {
        month = "0" + month;
      }
      if (day.length < 2) {
        day = "0" + day;
      }
      return [day, month, year].join(".");
    },
  },
};
</script>

<style lang="scss" scoped>
.order-item {
  @apply border-b border-dark px-7 py-7 lg:px-10 2xl:px-14 2xl:py-10;
}
</style>
