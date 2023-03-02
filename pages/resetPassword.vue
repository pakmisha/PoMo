<template>
  <div>
    <UIPath :path="path" />
    <div class="section-container section-title-distance">
      <div class="mx-auto mb-10 max-w-[1490px] text-center">
        <h1 class="heading-big mb-10">Восстановление пароля</h1>
        <p class="plaintext">Введите новый пароль</p>
      </div>
      <div class="mx-auto max-w-[600px] space-y-5">
        <div class="input-wrapper">
          <label for="">Новый пароль</label>
          <input type="password" v-model="password" class="input-primary" />
          <div
            class="text-error"
            v-if="errors && errors.hasOwnProperty('password')"
          >
            {{ errors.password[0] }}
          </div>
        </div>
        <div class="input-wrapper">
          <label for="">Повторите пароль</label>
          <input
            type="password"
            v-model="password_confirmation"
            class="input-primary"
          />
          <div
            class="text-error"
            v-if="errors && errors.hasOwnProperty('password_confirmation')"
          >
            {{ errors.password_confirmation[0] }}
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
    password: null,
    password_confirmation: null,
    errors: null,
    loading: false,
    path: [
      {
        name: "ВОССТАНОВЛЕНИЕ ПАРОЛЯ",
        link: "",
      },
    ],
  }),
  methods: {
    async send() {
      this.loading = true;
      this.errors = null;
      try {
        const response = await this.$axios.post("auth/reset-password", {
          password: this.password,
          password_confirmation: this.password_confirmation,
          id: this.$route.query.id,
        });
        this.$toast.success(response.data.message);
        this.$router.push("/login");
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
