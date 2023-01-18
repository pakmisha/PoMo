<template>
  <div class="cabinet">
    <div class="cabinet-wrapper">
      <h3 class="heading-secondary mb-5 lg:mb-10">Адрес 1</h3>
      <div class="address">
        <div class="address__item">
          <p class="address__item__left">имя Фамилия</p>
          <p class="address__item__right">Ксения Мишакина</p>
        </div>
        <div class="address__item">
          <p class="address__item__left">Электронная почта</p>
          <p class="address__item__right">kseniiamishakina@gmail.com</p>
        </div>
        <div class="address__item">
          <p class="address__item__left">Номер телефона</p>
          <p class="address__item__right">+7 707 567 88 00</p>
        </div>
        <div class="address__item">
          <p class="address__item__left">Страна</p>
          <p class="address__item__right">Казахстан</p>
        </div>
        <div class="address__item">
          <p class="address__item__left">Город</p>
          <p class="address__item__right">Алматы</p>
        </div>
        <div class="address__item">
          <p class="address__item__left">Адрес</p>
          <p class="address__item__right">Каирбекова, 56, кв. 90</p>
        </div>
        <div class="address__item">
          <p class="address__item__left">Почтовый индекс</p>
          <p class="address__item__right">344655</p>
        </div>
      </div>
      <div class="mt-5 flex items-center justify-between lg:mt-10">
        <UIButton class="btn-primary">Редактировать адрес</UIButton>
        <UIButton class="btn-underline text-grey">Удалить</UIButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.address {
  &__item {
    @apply flex items-center border-b border-grey-light py-4;
    &__left {
      @apply w-[50%] whitespace-nowrap text-xs font-medium uppercase lg:w-[30%] lg:text-sm;
    }
    &__right {
      @apply w-[40%] overflow-hidden text-ellipsis whitespace-nowrap lg:w-[70%];
    }
  }
}
</style>
