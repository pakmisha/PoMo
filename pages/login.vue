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
              <input
                v-model="credentials.login"
                type="text"
                class="input-primary"
              />
              <div
                class="text-error"
                v-if="errors && errors.hasOwnProperty('login')"
              >
                {{ errors.login[0] }}
              </div>
            </div>
            <div class="input-wrapper">
              <label for="">Пароль</label>
              <input
                v-model="credentials.password"
                type="password"
                class="input-primary"
              />
              <div
                class="text-error"
                v-if="errors && errors.hasOwnProperty('password')"
              >
                {{ errors.password[0] }}
              </div>
            </div>
          </div>
          <div class="mt-10 flex justify-between">
            <UIButton
              class="btn-secondary text-grey"
              :loader="loading"
              @click="login"
              >войти</UIButton
            >
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
export default {
  data: () => ({
    credentials: {
      login: null,
      password: null,
    },
    errors: null,
    loading: false,
  }),
  computed: {},
  methods: {
    async login() {
      this.loading = true;
      this.errors = null;
      try {
        await this.$auth.loginWith("local", {
          data: this.credentials,
        });
        this.$router.push("/");
        this.$store.dispatch("cart/get");
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
