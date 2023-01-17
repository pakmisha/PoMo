<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        личный кабинет
      </h1>
    </div>
    <div class="auth">
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
            <UIButton class="btn-secondary">войти</UIButton>
            <div class="flex items-end">
              <UILink link="" class="text-sm text-grey underline"
                >Забыли пароль?</UILink
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
