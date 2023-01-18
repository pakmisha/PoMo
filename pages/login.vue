<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        личный кабинет
      </h1>
    </div>
    <div class="auth section-container">
      <div class="auth-wrapper">
        <form action="">
          <div class="space-y-4">
            <div class="input-wrapper">
              <label for="">Электронная почта или номер телефона</label>
              <input type="text" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Электронная почта или номер телефона</label>
              <input type="text" class="input-primary" />
            </div>
          </div>
          <div class="mt-10 flex justify-between">
            <UIButton class="btn-secondary text-grey">войти</UIButton>
            <div class="flex items-end">
              <UILink link="/reset" class="btn-underline text-dark"
                >Забыли пароль?</UILink
              >
            </div>
          </div>
        </form>
      </div>
      <div class="mt-10 flex md:items-center md:justify-center">
        <UILink link="/registration" class="btn-underline"
          >зарегистрироваться</UILink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
