<template>
  <div class="cabinet">
    <div class="cabinet-wrapper">
      <h3 class="heading-secondary mb-5 lg:mb-10">Добавить новый адрес</h3>
      <form action="">
        <div class="space-y-4">
          <div class="input-wrapper">
            <label for="">Название адреса</label>
            <input v-model="name" type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label>Страна</label>
            <select v-model="country" name="" id="" class="select-secondary">
              <option :value="null" selected disabled>Выберите страну</option>
              <option
                :value="item.name"
                v-for="(item, index) in countries"
                :key="index"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="input-wrapper">
            <label for="">Город</label>
            <input v-model="city" type="text" class="input-primary" />
            <div
              class="text-error"
              v-if="errors && errors.hasOwnProperty('city')"
            >
              {{ errors.city[0] }}
            </div>
          </div>
          <div class="input-wrapper">
            <label for="">Адрес</label>
            <input v-model="address" type="text" class="input-primary" />
            <div
              class="text-error"
              v-if="errors && errors.hasOwnProperty('address')"
            >
              {{ errors.address[0] }}
            </div>
          </div>
          <div class="input-wrapper">
            <label for="">Название компании</label>
            <input v-model="company" type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Почтовый индекс</label>
            <input v-model="post_id" type="text" class="input-primary" />
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between lg:mt-10">
          <UIButton :loader="loading" class="btn-primary" @click="add"
            >Сохранить адрес</UIButton
          >
          <UIButton @click="reset" class="btn-underline text-grey"
            >Сбросить все</UIButton
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addresses: {
      type: Array,
    },
    countries: {
      type: Array,
    },
  },
  data: () => ({
    name: "Новый адрес",
    country: null,
    city: null,
    address: null,
    post_id: null,
    company: null,
    loading: false,
    errors: null,
  }),
  methods: {
    async add() {
      // this.loading = true;
      this.errors = null;
      try {
        const item = {
          name: this.name,
          country: this.country,
          city: this.city,
          address: this.address,
          company: this.company,
          post_id: this.post_id,
        };
        this.$store.dispatch("addresses/add", item);
        this.reset();
      } catch (e) {
        this.handleValidationErrors(e);
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
      this.name = null;
      this.country = null;
      this.city = null;
      this.address = null;
      this.company = null;
      this.post_id = null;
    },
  },
};
</script>

<style></style>
