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
        <div class="orders__wrapper">
          <div class="orders__wrapper__item">
            <div class="orders-item orders-item-nav">78900HY</div>
            <div class="orders-item orders-item-nav">19.12.2022</div>
            <div class="orders-item orders-item-nav">Цена</div>
            <div class="orders-item orders-item-nav">Ожидается доставка</div>
            <div class="orders-item orders-item-nav text-end">
              Смотреть подробнее
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.orders {
  &__nav {
    @apply flex items-center border-b border-grey-light bg-light py-5 px-3;
  }
  &__wrapper {
    &__item {
      @apply flex border-b border-grey-light py-5 px-3;
    }
  }
  .orders-item {
    @apply w-1/5;
    &.orders-item-nav {
      @apply text-sm font-medium uppercase;
    }
  }
}
</style>
