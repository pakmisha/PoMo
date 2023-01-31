<template>
  <div class="section-container">
    <div
      class="section-title-distance mx-auto max-w-[1490px] text-center md:mb-10"
    >
      <h1 class="heading-big mb-5 md:mb-10">регистрация</h1>
      <p class="plaintext mx-auto max-w-[600px]">
        Зарегистрируйтесь, чтобы получить возможность оплаты онлайн, видеть
        историю заказов и получить доступ к акциям, специальным предложениям, а
        также к дополнительному функционалу для профессиональных дизайнеров.
      </p>
    </div>
    <div class="auth">
      <div class="auth-wrapper">
        <form action="">
          <div class="space-y-4">
            <div class="input-wrapper">
              <label for="">Имя Фамилия*</label>
              <input
                type="text"
                v-model="credentials.full_name"
                class="input-primary"
              />
              <div
                class="text-error"
                v-if="errors && errors.hasOwnProperty('full_name')"
              >
                {{ errors.full_name[0] }}
              </div>
            </div>
            <div class="input-wrapper">
              <label for="">Адрес электронной почты*</label>
              <input
                type="email"
                v-model="credentials.email"
                class="input-primary"
              />
              <div
                class="text-error"
                v-if="errors && errors.hasOwnProperty('email')"
              >
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="input-wrapper">
              <label for="">Номер телефона</label>
              <input
                type="tel"
                v-model="credentials.phone"
                class="input-primary"
              />
              <div
                class="text-error"
                v-if="errors && errors.hasOwnProperty('phone')"
              >
                {{ errors.phone[0] }}
              </div>
            </div>
            <div class="input-wrapper">
              <label for="">Пароль*</label>
              <input
                type="password"
                v-model="credentials.password"
                class="input-primary"
              />
              <div
                class="text-error"
                v-if="errors && errors.hasOwnProperty('password')"
              >
                {{ errors.password[0] }}
              </div>
            </div>
            <div class="input-wrapper">
              <label for="">Повторите пароль*</label>
              <input
                type="password"
                v-model="credentials.password_confirmation"
                class="input-primary"
              />
            </div>
          </div>
          <div class="mt-5 flex flex-col justify-between md:mt-10 md:flex-row">
            <div class="flex">
              <UIButton
                :loader="loading"
                class="btn-secondary text-grey"
                @click="register"
                >создать аккаунт</UIButton
              >
            </div>
            <div class="mt-5 flex md:mt-0 md:items-end">
              <p class="mr-1 text-sm text-grey">Уже есть аккаунт?</p>
              <UILink link="/login" class="text-sm text-grey underline">
                Войти</UILink
              >
            </div>
          </div>
        </form>
      </div>
      <p
        class="mx-auto mt-5 max-w-[400px] text-sm text-grey-light md:text-center"
      >
        Нажимая кнопку «Создать аккаунт», вы соглашаетесь с политикой
        конфиденциальности
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    errors: null,
    credentials: {
      full_name: null,
      email: null,
      phone: null,
      password: null,
      password_confirmation: null,
    },
  }),
  methods: {
    async register() {
      this.loading = true;
      try {
        const response = await this.$axios.post("auth/register", {
          full_name: this.credentials.full_name,
          email: this.credentials.email,
          phone: this.credentials.phone,
          password: this.credentials.password,
          password_confirmation: this.credentials.password_confirmation,
        });
        this.$toast.success(response.data.message);
        this.reset();
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
    reset() {
      this.credentials.full_name = null;
      this.credentials.email = null;
      this.credentials.phone = null;
      this.credentials.password = null;
      this.credentials.password_confirmation = null;
    },
  },
};
</script>

<style></style>
