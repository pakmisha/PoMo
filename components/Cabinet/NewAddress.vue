<template>
  <div class="cabinet">
    <div class="cabinet-wrapper">
      <h3 class="heading-secondary mb-5 lg:mb-10">Добавить новый адрес</h3>
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
            <label for="">Страна</label>
            <input type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Имя Фамилия</label>
            <input type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Город</label>
            <input type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Адрес</label>
            <input type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Почтовый индекс</label>
            <input type="text" class="input-primary" />
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between lg:mt-10">
          <UIButton class="btn-primary">Сохранить адрес</UIButton>
          <UIButton class="btn-underline text-grey">Сбросить все</UIButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
