<template>
  <div class="cabinet">
    <div class="cabinet-wrapper">
      <h3 class="heading-secondary mb-5 lg:mb-10">Мои заказы</h3>
      <div class="orders">
        <div class="orders__nav">
          <div class="orders-item orders-item-nav">Номер заказа</div>
          <div class="orders-item orders-item-nav">Дата</div>
          <div class="orders-item orders-item-nav">Цена</div>
          <div class="orders-item orders-item-nav">Статус</div>
          <div class="orders-item orders-item-nav text-end">Подробнее</div>
        </div>
        <div
          class="orders__wrapper"
          v-for="(item, index) in orders"
          :key="index"
        >
          <div class="orders__wrapper__item">
            <div class="orders-item">{{ item.order_number }}</div>
            <div class="orders-item">{{ formatDate(item.created_at) }}</div>
            <div class="orders-item">{{ item.price | formatPrice }} ₸</div>
            <div class="orders-item">Ожидается оплата</div>
            <!-- <div class="orders-item" v-if="item.hasOwnProperty(in_process)">
              {{ item.in_process }}
            </div> -->
            <button
              class="orders-item text-end underline"
              @click.prevent="$nuxt.$emit('open-modal', 'order'), order(item)"
            >
              Смотреть подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formatPrice from "~/filters/formatPrice";
// import formatDate from "~/filters/formatDate";
export default {
  data: () => ({
    orders: [],
  }),
  created() {
    this.get();
  },
  filters: {
    formatPrice,
    // formatDate,
  },
  methods: {
    async get() {
      try {
        const response = await this.$axios.get("orders");
        this.orders = response.data.data.orders;
      } catch (e) {
        console.log("ERROR GETTING ORDERS");
      }
    },
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
    order(item) {
      this.$nuxt.$emit("send", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.orders {
  @apply flex  flex-col overflow-x-auto;
  &__nav {
    @apply flex w-fit items-center border-b border-grey-light bg-light py-5 px-3 lg:w-full;
  }
  &__wrapper {
    @apply w-fit lg:w-full;
    &__item {
      @apply flex border-b border-grey-light py-5 px-3;
    }
  }
  .orders-item {
    @apply mr-5 w-[150px] whitespace-nowrap text-sm text-grey lg:w-1/5;
    &.orders-item-nav {
      @apply text-sm font-medium uppercase;
    }
  }
}
</style>
