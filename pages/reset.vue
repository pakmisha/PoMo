<template>
  <div>
    <UIPath :path="path" />
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
          <input type="email" v-model="email" class="input-primary" />
          <div
            class="text-error"
            v-if="errors && errors.hasOwnProperty('email')"
          >
            {{ errors.email[0] }}
          </div>
        </div>
        <div class="mt-10 flex flex-col items-center justify-center">
          <UIButton class="btn-primary mb-10" @click="send" :loader="loading"
            >Отправить</UIButton
          >
          <UILink link="/login" class="btn-underline text-grey"
            >Вернуться назад</UILink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: null,
    errors: null,
    loading: false,
    path: [
      {
        name: "личный кабинет",
        link: "/login",
      },
      {
        name: "Сброс пароля",
        link: "/reset",
      },
    ],
  }),
  methods: {
    async send() {
      this.loading = true;
      this.errors = null;
      try {
        const response = await this.$axios.post("auth/send-link", {
          email: this.email,
        });
        this.$toast.success(response.data.message);
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
