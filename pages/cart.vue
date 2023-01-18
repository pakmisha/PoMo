<template>
  <section>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        корзина
      </h1>
    </div>
    <section class="mx-auto max-w-[1920px] px-5 lg:px-44 2xl:px-64">
      <CartProduct />
      <div class="mt-5 flex items-center justify-between lg:justify-end">
        <div class="mr-10 text-sm font-medium uppercase">Всего:</div>
        <div class="text-xl font-medium uppercase lg:text-2xl">1 580 300 ₸</div>
      </div>
      <div class="mt-10 flex flex-col items-center lg:mt-20">
        <UILink link="" class="btn-secondary"
          >перейти к оформлению заказа</UILink
        >
        <div class="mx-auto mt-5 max-w-[600px] text-center text-sm text-grey">
          Стоимость доставки не включена в сумму заказа. Доставка по г. Алматы и
          Астана при сумме заказа от 500 000 ₸ осуществляется бесплатно
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
