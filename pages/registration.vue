<template>
  <div class="section-container">
    <div
      class="section-title-distance mx-auto max-w-[1490px] text-center md:mb-10"
    >
      <h1 class="heading-big mb-5 md:mb-10">регистрация</h1>
      <p class="plaintext mx-auto max-w-[600px]">
        Зарегистрируйтесь, чтобы получить возможность оплаты онлайн, видеть
        историю заказов и получить доступ к акциям, специальным предложениям, а
        также к дополнительному функционалу для профессиональных дизайнеров.
      </p>
    </div>
    <div class="auth">
      <div class="auth-wrapper">
        <form action="">
          <div class="space-y-4">
            <div class="input-wrapper">
              <label for="">Имя Фамилия*</label>
              <input type="text" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Адрес электронной почты*</label>
              <input type="email" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Номер телефона</label>
              <input type="number" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Пароль*</label>
              <input type="password" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Повторите пароль**</label>
              <input type="password" class="input-primary" />
            </div>
          </div>
          <div class="mt-5 flex flex-col justify-between md:mt-10 md:flex-row">
            <div class="flex">
              <UIButton class="btn-secondary text-grey"
                >создать аккаунт</UIButton
              >
            </div>
            <div class="mt-5 flex md:mt-0 md:items-end">
              <p class="mr-1 text-sm text-grey">Уже есть аккаунт?</p>
              <UILink link="/login" class="text-sm text-grey underline">
                Войти</UILink
              >
            </div>
          </div>
        </form>
      </div>
      <p
        class="mx-auto mt-5 max-w-[400px] text-sm text-grey-light md:text-center"
      >
        Нажимая кнопку «Создать аккаунт», вы соглашаетесь с политикой
        конфиденциальности
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
