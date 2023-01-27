<template>
  <div class="cabinet">
    <div v-if="!active" class="cabinet-wrapper">
      <h3 class="heading-secondary mb-5 lg:mb-10">личные данные</h3>
      <div class="mb-10 w-full md:mb-5 lg:mb-10">
        <div class="flex items-center border-b border-grey-light py-4">
          <p class="mr-4 w-2/5 text-sm font-medium uppercase lg:w-1/4">
            имя Фамилия
          </p>
          <p class="text-sm text-grey">Ксения Мишакина</p>
        </div>
        <div class="flex items-center border-b border-grey-light py-4">
          <p class="mr-4 w-2/5 text-sm font-medium uppercase lg:w-1/4">
            Электронная почта
          </p>
          <p class="text-sm text-grey">kseniiamishakina@gmail.com</p>
        </div>
        <div class="flex items-center border-b border-grey-light py-4">
          <p class="mr-4 w-2/5 text-sm font-medium uppercase lg:w-1/4">
            Номер телефона
          </p>
          <p class="text-sm text-grey">+7 707 567 88 00</p>
        </div>
      </div>
      <div class="flex flex-col justify-between md:flex-row md:items-center">
        <div class="flex">
          <UIButton class="btn-primary" @click="logout" :loader="loading"
            >Выйти из аккаунта</UIButton
          >
        </div>
        <div class="flex">
          <UIButton
            class="mt-4 text-sm text-grey underline md:mt-0"
            @click="active = true"
            >Редактировать данные</UIButton
          >
        </div>
      </div>
    </div>
    <div v-else class="cabinet-wrapper">
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
            class="mt-10 flex flex-col justify-between md:mt-5 md:flex-row md:items-center lg:mt-10"
          >
            <div class="flex">
              <UIButton class="btn-primary">Сохранить изменения</UIButton>
            </div>
            <div class="flex">
              <UIButton
                class="mt-4 text-sm text-grey underline lg:mt-0"
                @click="active = false"
                >Отменить</UIButton
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    active: false,
  }),
  methods: {
    async logout() {
      this.loading = true;
      await this.$auth.logout();
    },
  },
};
</script>

<style></style>
