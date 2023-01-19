<template>
  <ModalsModal name="order" class="modal modal-md">
    <div class="modal-wrapper">
      <div class="order-item flex justify-between">
        <div>
          <h3 class="heading-secondary mb-3">Заказ от 19.12.2022</h3>
          <p class="text-sm text-grey">Номер заказа: 78900HY</p>
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
        <p class="text-sm text-grey">Ожидается доставка</p>
      </div>
      <div class="order-item">
        <p class="mb-2 text-sm font-medium uppercase text-dark">Оплата:</p>
        <p class="text-sm text-grey">
          Заказ на сумму 1 200 480 ₸ оплачен вами в офисе компании
        </p>
      </div>
      <div class="order-item">
        <p class="mb-2 text-sm font-medium uppercase text-dark">Доставка:</p>
        <p class="text-sm text-grey">
          Ожидается доставка по адресу Каирбекова, 56, кв. 90. С вами свяжется
          сотрудник сервисной службы и сообщит дату и время доставки.
        </p>
      </div>
      <div class="order-item">
        <p class="mb-2 text-sm font-medium uppercase text-dark">
          Содержание заказа:
        </p>
        <div class="space-y-5">
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
    </div>
  </ModalsModal>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order-item {
  @apply border-b border-dark px-7 py-7 lg:px-10 2xl:px-14 2xl:py-10;
}
</style>
