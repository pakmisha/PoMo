<template>
  <ModalsModal name="request" class="modal modal-xl">
    <div class="modal-wrapper">
      <div class="text-center">
        <h1 class="mb-3 text-xl font-medium uppercase md:text-2xl 2xl:text-3xl">
          Оставьте заявку на сотрудничество
        </h1>
        <p class="text-xs text-grey md:text-sm">
          Мы с большим теплом принимаем энергичных и талантливых людей, чтобы
          воплощать ваши проекты совместными усилиями. Заполните форму и мы
          пришлем вам необходимую информацию на e-mail.
        </p>
      </div>
      <form class="mt-3 2xl:mt-5">
        <div class="space-y-2 md:space-y-3">
          <div class="input-wrapper">
            <label for="">Имя*</label>
            <input type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Название компании</label>
            <input type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Адрес электронной почты*</label>
            <input type="email" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Номер телефона*</label>
            <input type="text" class="input-primary" />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button class="btn-primary mt-4">оставить заявку</button>
        </div>
        <p class="mt-4 text-center text-xs text-grey">
          Нажимая кнопку «Оставить заявку», вы соглашаетесь с политикой
          конфиденциальности
        </p>
      </form>
      <button
        class="absolute top-4 right-4"
        @click.prevent="$nuxt.$emit('close-modal', 'request')"
      >
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
      <div class="page-icon o absolute -bottom-10 -left-10 hidden lg:block">
        <img src="~/assets/img/icons/o.svg" alt="" />
      </div>
    </div>
  </ModalsModal>
</template>

<script>
export default {};
</script>

<style></style>
