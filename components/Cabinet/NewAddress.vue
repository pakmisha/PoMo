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
          </div>
          <div class="input-wrapper">
            <label for="">Адрес</label>
            <input v-model="address" type="text" class="input-primary" />
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
    loading: false,
  }),
  methods: {
    async add() {
      this.loading = true;
      try {
        const response = await this.$axios.post("addresses", {
          name: this.name,
          country: this.country,
          city: this.city,
          address: this.address,
          index: this.post_id,
        });
        this.addresses.push(response.data.data.address);
        this.$toast.success(response.data.message);
        this.reset();
      } catch (e) {
        this.$toast.error(e.response.data.message);
      } finally {
        this.loading = false;
      }
    },
    reset() {
      this.name = null;
      this.country = null;
      this.city = null;
      this.address = null;
      this.post_id = null;
    },
  },
};
</script>

<style></style>
