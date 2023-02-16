<template>
  <ModalsModal name="buy" class="modal modal-xl">
    <div class="modal-wrapper">
      <div class="text-center">
        <h1 class="mb-3 text-xl font-medium uppercase md:text-2xl 2xl:text-3xl">
          Заказать товар
        </h1>
        <p class="text-xs text-grey md:text-sm">
          Пожалуйста, заполните форму ниже, и наш менеджер свяжется с вами для
          уточнения деталей и оформления заказа в ближайшее время
        </p>
      </div>
      <form class="mt-3 2xl:mt-5">
        <div class="space-y-2 md:space-y-3">
          <div class="input-wrapper">
            <label for="">Имя*</label>
            <input v-model="full_name" type="text" class="input-primary" />
            <div
              v-if="errors && errors.hasOwnProperty('full_name')"
              class="text-error"
            >
              {{ errors.full_name[0] }}
            </div>
          </div>

          <div class="input-wrapper">
            <label for="">Номер телефона*</label>
            <input v-model="phone" type="text" class="input-primary" />
            <div
              v-if="errors && errors.hasOwnProperty('phone')"
              class="text-error"
            >
              {{ errors.phone[0] }}
            </div>
          </div>
          <div class="input-wrapper">
            <label for="">Город доставки*</label>
            <input v-model="city" type="text" class="input-primary" />
            <div
              v-if="errors && errors.hasOwnProperty('city')"
              class="text-error"
            >
              {{ errors.city[0] }}
            </div>
          </div>
          <div class="input-wrapper">
            <label for="">Желаемый срок получения*</label>
            <input v-model="delivery_date" type="text" class="input-primary" />
            <div
              v-if="errors && errors.hasOwnProperty('delivery_date')"
              class="text-error"
            >
              {{ errors.delivery_date[0] }}
            </div>
          </div>
          <div class="input-wrapper">
            <label for="">Комментарий к заказу</label>
            <input v-model="comment" type="text" class="input-primary" />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <UIButton class="btn-primary mt-4" :loader="loading" @click="send">
            заказать товар
          </UIButton>
        </div>
        <p class="mt-4 text-center text-xs text-grey">
          Нажимая кнопку «Заказать товар», вы соглашаетесь с политикой
          конфиденциальности
        </p>
      </form>
      <button
        class="absolute top-4 right-4"
        @click.prevent="$nuxt.$emit('close-modal', 'buy')"
      >
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
    full_name: null,
    phone: null,
    city: null,
    delivery_date: null,
    comment: null,
    loading: false,
    errors: null,
  }),
  methods: {
    async send() {
      this.loading = true;
      this.errors = null;
      try {
        const response = await this.$axios.post("orders/furniture", {
          full_name: this.full_name,
          phone: this.phone,
          city: this.city,
          delivery_date: this.delivery_date,
          comment: this.comment,
        });
        this.reset();
        $nuxt.$emit("close-modal", "request");
        this.$toast.success(response.data.message);
      } catch (e) {
        this.handleValidationErrors(e);
      } finally {
        this.loading = false;
      }
    },
    reset() {
      this.full_name = null;
      this.phone = null;
      this.city = null;
      this.delivery_date = null;
      this.comment = null;
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
