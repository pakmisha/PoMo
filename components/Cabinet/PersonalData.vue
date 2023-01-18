<template>
  <div class="cabinet">
    <div class="cabinet-wrapper">
      <h3 class="heading-secondary mb-5 lg:mb-10">
        Редактировать личные данные
      </h3>
      <div>
        <form action="">
          <div class="space-y-4">
            <div class="input-wrapper">
              <label for="">Имя Фамилия</label>
              <input type="text" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Электронная почта</label>
              <input type="email" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Номер телефона</label>
              <input type="text" class="input-primary" />
            </div>
          </div>
          <div
            class="mt-5 flex flex-col items-center justify-between lg:mt-10 lg:flex-row"
          >
            <UIButton class="btn-primary">Сохранить изменения</UIButton>
            <UIButton class="btn-underline mt-5 lg:mt-0">Отменить</UIButton>
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
