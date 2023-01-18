<template>
  <div>
    <div class="section-container section-title-distance">
      <div class="mx-auto mb-10 max-w-[1490px] text-center">
        <h1 class="heading-big mb-10">Сброс пароля</h1>
        <p class="plaintext">
          Введите адрес электронной почты и мы отправим вам ссылку для сброса
          пароля
        </p>
      </div>
      <div class="mx-auto max-w-[600px]">
        <div class="input-wrapper">
          <label for="">Адрес электронной почты</label>
          <input type="text" class="input-primary" />
        </div>
        <div class="mt-10 flex flex-col items-center justify-center">
          <UIButton class="btn-primary mb-10">Отправить</UIButton>
          <UILink link="/login" class="btn-underline text-grey"
            >Вернуться назад</UILink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
