<template>
  <ModalsModal name="services" class="modal modal-xl">
    <div class="modal-wrapper">
      <div class="text-center">
        <h1 class="mb-3 text-xl font-medium uppercase md:text-2xl 2xl:text-3xl">
          Заказать услугу
        </h1>
        <p class="text-xs text-grey md:text-sm">
          Мы с большим теплом принимаем энергичных и талантливых людей, чтобы
          воплощать ваши проекты совместными усилиями. Заполните форму и мы
          пришлем вам необходимую информацию на e-mail.
        </p>
      </div>
      <form class="mt-3 2xl:mt-5">
        <div class="space-y-2 md:space-y-3">
          <div class="input-wrapper">
            <label for="">Имя*</label>
            <input v-model="name" type="text" class="input-primary" />
          </div>
          <div
            class="text-error"
            v-if="errors && errors.hasOwnProperty('name')"
          >
            {{ errors.name[0] }}
          </div>
          <div class="input-wrapper">
            <label for="">Услуга</label>
            <input
              v-if="service"
              v-model="service.title[$i18n.locale]"
              disabled
              type="text"
              class="input-primary"
            />
          </div>
          <div class="input-wrapper">
            <label for="">Адрес электронной почты*</label>
            <input v-model="email" type="email" class="input-primary" />
          </div>
          <div
            class="text-error"
            v-if="errors && errors.hasOwnProperty('email')"
          >
            {{ errors.email[0] }}
          </div>
          <div class="input-wrapper">
            <label for="">Номер телефона*</label>
            <input v-model="phone" type="phone" class="input-primary" />
          </div>
          <div
            class="text-error"
            v-if="errors && errors.hasOwnProperty('phone')"
          >
            {{ errors.phone[0] }}
          </div>
        </div>
        <div class="flex items-center justify-center">
          <UIButton :loader="loading" class="btn-primary mt-4" @click="send">
            оставить заявку
          </UIButton>
        </div>
        <p class="mt-4 text-center text-xs text-grey">
          Нажимая кнопку «Оставить заявку», вы соглашаетесь с политикой
          конфиденциальности
        </p>
      </form>
      <button class="absolute top-4 right-4" @click.prevent="closeModal">
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L13 13" stroke="#101820" stroke-linecap="round" />
          <path d="M13 1L1 13" stroke="#101820" stroke-linecap="round" />
        </svg>
      </button>
      <div class="page-icon o absolute -bottom-10 -left-10 hidden lg:block">
        <img src="~/assets/img/icons/o.svg" alt="" />
      </div>
    </div>
  </ModalsModal>
</template>

<script>
export default {
  data: () => ({
    name: null,
    service: null,
    email: null,
    phone: null,
    loading: false,
    errors: null,
  }),
  created() {
    this.$nuxt.$on("send", (item) => {
      this.service = item;
    });
  },
  methods: {
    async send() {
      this.loading = true;
      this.errors = null;
      try {
        const response = await this.$axios.post("services", {
          name: this.name,
          company: this.company,
          email: this.email,
          phone: this.phone,
          service_id: this.service.id,
        });
        this.$toast.success(response.data.message);
        this.closeModal();
        this.reset();
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
    closeModal() {
      this.$nuxt.$emit("close-modal", "services");
    },
    reset() {
      this.name = null;
      this.company = null;
      this.email = null;
      this.phone = null;
    },
  },
};
</script>

<style></style>
