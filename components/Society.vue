<template>
  <div class="section-container section-distance">
    <div
      class="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center lg:mb-24"
    >
      <p class="heading-sub">[вклад в развитие дизайн сообщества]</p>
      <div class="my-3 h-16 w-px bg-dark-blue"></div>
      <h2 class="heading-primary mb-6 lg:mb-10">
        поддерживаем художников и дизайнеров и предлагаем инструменты
        для саморазвития и продвижения
      </h2>
      <p class="plaintext mb-10 lg:mx-32">
        POMO – это платформа, где истории могут быть услышаны, а творения
        востребованы. Если вы — дизайнер интерьера, декоратор или архитектор,
        то PoMo Design Center предлагает вам программу сотрудничества, благодаря
        которой ваша работа станет более удобной и плодотворной.
      </p>
      <button
        class="btn-primary"
        @click.prevent="$nuxt.$emit('open-modal', 'request')"
      >
        узнать подробнее
      </button>
    </div>
    <div class="relative flex justify-between">
      <div class="lg:mr-20">
        <div class="mr-14 lg:mr-0">
          <img src="~/assets/img/bg/society-1.png" alt="" />
        </div>
        <div class="-mt-14 ml-14 lg:-mt-24 lg:ml-72">
          <img src="~/assets/img/bg/society-2.png" alt="" />
        </div>
      </div>
      <div class="mt-20 hidden lg:block">
        <img src="~/assets/img/bg/society-3.png" alt="" />
      </div>
      <div class="page-icon m -left-10 bottom-32 -z-10 lg:left-20">
        <img src="~/assets/img/icons/m.svg" alt="" />
      </div>
      <div class="page-icon o right-[22%] top-64 hidden lg:block">
        <img src="~/assets/img/icons/o.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
