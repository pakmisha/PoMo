<template>
  <div class="cabinet">
    <div v-if="!active" class="cabinet-wrapper">
      <h3 class="heading-secondary mb-5 lg:mb-10">личные данные</h3>
      <div class="mb-10 w-full md:mb-5 lg:mb-10">
        <div class="flex items-center border-b border-grey-light py-4">
          <p class="mr-4 w-2/5 text-sm font-medium uppercase lg:w-1/4">
            имя Фамилия
          </p>
          <p v-if="user.full_name" class="text-sm text-grey">
            {{ user.full_name }}
          </p>
          <p v-else>-</p>
        </div>
        <div class="flex items-center border-b border-grey-light py-4">
          <p class="mr-4 w-2/5 text-sm font-medium uppercase lg:w-1/4">
            Электронная почта
          </p>
          <p v-if="user.email" class="text-sm text-grey">
            {{ user.email }}
          </p>
          <p v-else>-</p>
        </div>
        <div class="flex items-center border-b border-grey-light py-4">
          <p class="mr-4 w-2/5 text-sm font-medium uppercase lg:w-1/4">
            Номер телефона
          </p>
          <p v-if="user.phone" class="text-sm text-grey">
            {{ user.phone }}
          </p>
          <p v-else>-</p>
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
              <input
                v-model="user.full_name"
                type="text"
                class="input-primary"
              />
              <div class="text-error" v-if="errors?.full_name">
                {{ errors.full_name[0] }}
              </div>
            </div>

            <div class="input-wrapper">
              <label for="">Электронная почта</label>
              <input v-model="user.email" type="email" class="input-primary" />
              <div class="text-error" v-if="errors?.email">
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="input-wrapper">
              <label for="">Номер телефона</label>
              <input v-model="user.phone" type="phone" class="input-primary" />
              <div class="text-error" v-if="errors?.phone">
                {{ errors.phone[0] }}
              </div>
            </div>
          </div>
          <div
            class="mt-10 flex flex-col justify-between md:mt-5 md:flex-row md:items-center lg:mt-10"
          >
            <div class="flex">
              <UIButton class="btn-primary" :loader="loading" @click="update"
                >Сохранить изменения</UIButton
              >
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
    user: {
      full_name: null,
      email: null,
      phone: null,
    },
    errors: null,
    loading: false,
    active: false,
  }),
  created() {
    for (let i of Object.keys(this.user)) {
      this.user[i] = this.$auth.state.user[i];
    }
  },
  methods: {
    async logout() {
      this.loading = true;
      await this.$auth.logout();
      this.$store.dispatch("favourites/get");
    },
    async update() {
      this.loading = true;
      this.errors = null;
      try {
        const response = await this.$axios.put("customer", {
          full_name: this.user.full_name,
          email: this.user.email,
          phone: this.user.phone,
        });
        this.$toast.success(response.data.message);
        this.active = false;
      } catch (e) {
        this.handleValidationErrors(e);
      } finally {
        this.loading = false;
      }
    },
    handleValidationErrors(e) {
      if (e.response.status == 422) {
        this.errors = e.response.data.errors;
        this.$toast.error("Ошибка валидации данных!");
      } else {
        this.$toast.error(e.response.data.message);
      }
    },
  },
};
</script>

<style></style>
